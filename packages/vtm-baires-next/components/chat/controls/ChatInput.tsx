import React, {useState} from "react";
import InputBase from "@mui/material/InputBase";
import ChatThrowDiceInput from "./ChatThrowDiceInput";
import type {ChatDiceRequest} from "./ChatThrowDiceInput";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import CasinoIcon from "@mui/icons-material/Casino";
import SendIcon from "@mui/icons-material/Send";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {menuIconStyle} from "../../menu/menu-base-utils";
import Typography from "@mui/material/Typography";
import ChatInputHelp from "./ChatInputHelp";
import type {ReactElement} from "react";
import {isNullOrEmpty} from "vtm-baires-next-utils/src/utils";
import {useRecoilValue} from "recoil";
import {isUserMasterSelector} from "../../../session/selectors/recoil-selectors";

type ChatInputProps = {
    newChatEntry: (chatEntry: string) => void;
    newDiceEntry: (diceRequest: ChatDiceRequest) => void;
}

const minCharacters = 100;
const maxCharacters = 1200;
const warningCharacters = 1000;
const preferredCharacters = 700;

const ChatInput = ({newChatEntry, newDiceEntry}: ChatInputProps): ReactElement => {
    const theme = useTheme();
    const isUserMaster = useRecoilValue(isUserMasterSelector);

    const [value, setValue] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inDices, setInDices] = useState(true);
    const [charactersCount, setCharactersCount] = useState(0);

    const showMiniFont = useMediaQuery(theme.breakpoints.down('md'));

    const fontSize = showMiniFont ? "16px" : "18px";
    const textBoxRows = showMiniFont ? 3 : 4;

    const setNewValue = (val: string) => {
        setValue((_: string) => val);
        setInDices((_: boolean) => isNullOrEmpty(val));
        setCharactersCount(val.length);
    }

    const onControlChanged = ({ target: { value: val } }: any) => setNewValue(val);

    const handleControlKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const {key} = event;
        
        if (key === "Enter") {
            event.preventDefault();
            sendInputEntry();
        }
    };

    const handleControlKeyUp = ({target: {value}}: any) => {
        setCharactersCount((_: number) => (value as string).length);
    };

    const openPopup = (_: any) => {
        setIsModalOpen((_: any) => true);
    };

    const isMasterPhrase = () => isUserMaster && value.substring(0, 3) === "***";

    const isOffPhrase = () => value.substring(0, 1) === "+";

    const sendInputEntry = () => {
        if (isMasterPhrase() || isOffPhrase() || value.length >= minCharacters) {
            newChatEntry(isMasterPhrase() ? value : value.substring(0, maxCharacters));
            setNewValue("");
        }
    };

    const transitionDuration: any = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const floatingButtonStyle: any = {
        position: 'absolute',
        bottom: theme.spacing(7),
        right: theme.spacing(3)
    };

    const floatingButtonBackgroundStyle: any = {
        transitionDelay: transitionDuration.exit,
        backgroundColor: "secondary.main",
        color: "primary.main",
        "&:hover": {
            backgroundColor: "secondary.light"
        }
    };

    const remainingCharacterDescription = () =>
        `Numero di caratteri rimanenti: ${maxCharacters - charactersCount}, consigliati ${preferredCharacters - charactersCount}, minimo ${minCharacters}`;

    const CountCharacterMessageWrapper = ({message, color}: any) => (
        <Box component="span" sx={{color}}>{message}</Box>
    );

    const countCharacterMessage = () => {
        if (charactersCount < minCharacters && charactersCount > 0 && !isOffPhrase() && !isMasterPhrase()) {
            return (<CountCharacterMessageWrapper message={`${minCharacters - charactersCount} caratteri per raggiungere il minimo per azione.`}
                                                  color="red" />);
        }

        if (charactersCount > maxCharacters) {
            return (<CountCharacterMessageWrapper message={`Numero di caratteri utilizzati eccessivo. La frase sarà tagliata a ${maxCharacters} caratteri.`}
                                                  color="red" />);
        }

        if (charactersCount > warningCharacters) {
            return (<CountCharacterMessageWrapper message={`${remainingCharacterDescription()}, riduci la frase`}
                                                  color="red"/>);
        }

        if (charactersCount > preferredCharacters) {
            return (<CountCharacterMessageWrapper message={`${remainingCharacterDescription()}, fuori limite consigliato`}
                                                  color="orange" />);
        }

        return remainingCharacterDescription();
    };

    return (
        <>
            <ChatThrowDiceInput isOpen={isModalOpen}
                                onDialogClosing={() => setIsModalOpen(false)}
                                onDialogFormSubmit={newDiceEntry} />

            <Box>
                <InputBase placeholder="Scrivi qui la tua azione"
                           multiline
                           rows={textBoxRows}
                           fullWidth
                           value={value}
                           // onFocus={(_: any) => setInDices(false)}
                           // onBlur={(_: any) => setInDices(true)}
                           sx={{
                               fontFamily: 'Chat',
                               padding: "5px",
                               width: "calc(100% - 70px)",
                               fontSize: fontSize
                           }}
                           inputProps={{ 'aria-label': 'naked' }}
                           onKeyDown={handleControlKeyDown}
                           onKeyUp={handleControlKeyUp}
                           onChange={onControlChanged} />
                <Typography sx={{
                    fontSize: "13px"
                }}>
                    {countCharacterMessage()}
                    <ChatInputHelp />
                </Typography>
            </Box>

            <Box sx={floatingButtonStyle}>
                {/* @ts-ignore */}
                <Zoom sx={floatingButtonBackgroundStyle}
                      timeout={transitionDuration}
                      in={inDices}
                      unmountOnExit>
                    <Fab color="primary"
                         aria-label="dices"
                         onClick={openPopup}>
                        <CasinoIcon sx={menuIconStyle} />
                    </Fab>
                </Zoom>
            </Box>
            <Box sx={floatingButtonStyle}>
                {/* @ts-ignore */}
                <Zoom sx={floatingButtonBackgroundStyle}
                      timeout={transitionDuration}
                      in={!inDices}
                      unmountOnExit>
                    <Fab color="primary"
                         aria-label="send"
                         onClick={sendInputEntry}>
                        <SendIcon sx={menuIconStyle} />
                    </Fab>
                </Zoom>
            </Box>
        </>
    );
};

export default ChatInput;
