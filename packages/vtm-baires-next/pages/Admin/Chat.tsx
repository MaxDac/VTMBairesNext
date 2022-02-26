import Grid from "@mui/material/Grid";
import type {ReactElement} from "react";
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type {Option} from "vtm-baires-next-utils";
import {defaultFormatDateAndTimeForControl, parseISO, useCustomLazyLoadQuery, yesterday} from "vtm-baires-next-utils";
import {getAllChatLocationsQuery} from "vtm-baires-next-services/graphql-queries/queries/chat/GetAllChatLocationsQuery";
import {
    GetAllChatLocationsQuery
} from "vtm-baires-next-services/graphql-queries/queries/chat/__generated__/GetAllChatLocationsQuery.graphql";
import {SelectChangeEvent} from "@mui/material";
import {getAdminChatEntriesQuery} from "vtm-baires-next-services/graphql-queries/queries/chat/GetAdminChatEntriesQuery";
import {
    GetAdminChatEntriesQuery
} from "vtm-baires-next-services/graphql-queries/queries/chat/__generated__/GetAdminChatEntriesQuery.graphql";
import {ParsedText} from "vtm-baires-next-components";

type ChatViewerInternalProps = {
    from: any,
    to: any,
    mapId: string,
    fetchKey: number
}

const Chat = (): ReactElement => {
    const chatRooms = useCustomLazyLoadQuery<GetAllChatLocationsQuery>(getAllChatLocationsQuery, {})
        ?.allChatLocations;

    const [from, setFrom] = useState<Option<Date>>(yesterday(new Date()));
    const [to, setTo] = useState<Option<Date>>(new Date());
    const [selectedChatId, setSelectedChatId] = useState("");
    const [fetchKey, setFetchKey] = useState(0);

    const formattedFromDate = () => defaultFormatDateAndTimeForControl(from);
    const formattedToDate = () => defaultFormatDateAndTimeForControl(to);

    const showAllChatRooms = () => {
        const def = [<MenuItem key={-1} id="">None</MenuItem>];

        if (chatRooms != null && chatRooms.length > 0) {
            const roomItems = chatRooms
                .map(val => (<MenuItem key={val?.id} value={val?.id}>{val?.name}</MenuItem>));
            
            return def.concat(roomItems);
        }

        return def;
    }

    const handleFromChange = ({target: {value: newValue}}: any) => {
        setFrom((_: any) => parseISO(newValue));
        setFetchKey(k => k + 1);
    };

    const handleToChange = ({target: {value: newValue}}: any) => {
        setTo((_: any) => parseISO(newValue));
        setFetchKey(k => k + 1);
    };

    const handleChatRoomChange = ({target: {value}}: SelectChangeEvent<string>) => {
        setSelectedChatId((_: any) => value);
        setFetchKey(k => k + 1);
    };

    const showRows = () => {
        if (selectedChatId != null && selectedChatId !== "") {
            return (<ChatViewerInternal mapId={selectedChatId}
                                        from={from}
                                        to={to}
                                        fetchKey={fetchKey} />);
        }

        return (<></>);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} sx={{textAlign: "center"}}>
                    <TextField id="from"
                               label="Da"
                               type="datetime-local"
                               defaultValue={formattedFromDate()}
                               onChange={handleFromChange}
                               sx={{ width: 250 }}
                               InputLabelProps={{
                                   shrink: true,
                               }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{textAlign: "center"}}>
                    <TextField id="to"
                               label="Fino a"
                               type="datetime-local"
                               defaultValue={formattedToDate()}
                               onChange={handleToChange}
                               sx={{ width: 250 }}
                               InputLabelProps={{
                                   shrink: true,
                               }} />
                </Grid>
                <Grid item xs={12} md={4} sx={{textAlign: "center"}}>
                    <FormControl fullWidth>
                        <InputLabel id="chat-room">Chat</InputLabel>
                        <Select labelId="chat-room"
                                id="chat-room-select"
                                value={selectedChatId}
                                label="Age"
                                onChange={handleChatRoomChange}>
                            {showAllChatRooms()}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sx={{
                    margin: "20px",
                    padding: "20px"
                }}>
                    {showRows()}
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
};

const ChatViewerInternal = ({from, to, mapId, fetchKey}: ChatViewerInternalProps) => {
    const entries = useCustomLazyLoadQuery<GetAdminChatEntriesQuery>(getAdminChatEntriesQuery, {
        mapId: mapId, 
        fromDate: from, 
        toDate: to
    }, {
        fetchPolicy: "network-only",
        fetchKey: fetchKey
    });

    const rows = () => entries
        ?.mapAdminChatEntries
        ?.map(entry => (
            <TableRow key={entry?.id}
                      sx={{
                          '&:last-child td, &:last-child th': {
                              border: 0
                          }
                      }}>
                <TableCell component="th" scope="row" sx={{verticalAlign: "top"}}>
                    <ParsedText text={entry?.insertedAt} internalDivSx={{
                        fontSize: "0.9rem"
                    }} />
                </TableCell>
                <TableCell sx={{verticalAlign: "top"}}>
                    <ParsedText text={entry?.character?.name} internalDivSx={{
                        fontSize: "0.9rem"
                    }} />
                </TableCell>
                <TableCell>
                    <ParsedText text={entry?.text ?? entry?.result} internalDivSx={{
                        fontSize: "0.9rem"
                    }} />
                </TableCell>
            </TableRow>
        ));

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="chat-logs">
                <TableHead>
                    <TableRow>
                        <TableCell>Ora</TableCell>
                        <TableCell>Personaggio</TableCell>
                        <TableCell>Testo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows()}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Chat;
