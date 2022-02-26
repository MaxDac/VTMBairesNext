import React, {ForwardedRef, SyntheticEvent} from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AdminHavensForm from "./AdminHavensForm";
import AdminHavensResonanceForm from "./AdminHavensResonanceForm";
import type {Haven} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import {useResonanceTypes} from "vtm-baires-next-services/graphql-queries/queries/info/GetResonanceTypesQuery";
import type {FormSubmitProps} from "./AdminHavensForm";
import type {ResonancesFormSubmitProps} from "./AdminHavensResonanceForm";
import AdminHavensDangerForm from "./AdminHavensDangerForm";
import type {DangerFormSubmitProps} from "./AdminHavensDangerForm";

type Props = {
    haven: Haven;
    havenCharacterId?: string;
    onSetHavenSubmitted: (props: FormSubmitProps) => void;
    onMarkResonanceSubmitted: (props: ResonancesFormSubmitProps) => void;
    onDangerUpdateSubmitted: (props: DangerFormSubmitProps) => void;
};

const AdminHavensFormSelector =
    React.forwardRef(({haven, havenCharacterId, onSetHavenSubmitted, onMarkResonanceSubmitted, onDangerUpdateSubmitted}: Props, ref: ForwardedRef<any>) => {
        const resonances: [string, string][] = useResonanceTypes().map(x => [x, x]);

        const [value, setValue] = React.useState('1');

        const handleChange = (event: SyntheticEvent, newValue: any) => {
            setValue(newValue);
        };

        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Assegna Rifugio" value="1" />
                            <Tab label="Traccia Risonanza" value="2" />
                            <Tab label="Aggiungi pericolo" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <AdminHavensForm resonances={resonances}
                                         haven={haven}
                                         havenCharacterId={havenCharacterId}
                                         onSubmit={onSetHavenSubmitted}
                                         ref={ref} />
                    </TabPanel>
                    <TabPanel value="2">
                        <AdminHavensResonanceForm resonances={resonances}
                                                  haven={haven}
                                                  onSubmit={onMarkResonanceSubmitted}
                                                  ref={ref} />
                    </TabPanel>
                    <TabPanel value="3">
                        <AdminHavensDangerForm haven={haven}
                                               onSubmit={onDangerUpdateSubmitted}
                                               ref={ref} />
                    </TabPanel>
                </TabContext>
            </Box>
        );
    });

export default AdminHavensFormSelector;
