import * as React from "react";
import {createContext, useContext, useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {ComponentWithChildrenProps} from "../index";

export type BackdropContextProps = {
    startWait: () => void;
    stopWait: () => void;
}

export const BackdropContext: React.Context<BackdropContextProps> = createContext({
    startWait: () => {},
    stopWait: () => {}
});

export const useWait = (): BackdropContextProps =>
    useContext(BackdropContext);

const BackdropProvider = ({children}: ComponentWithChildrenProps): JSX.Element => {
    const [backdropOpen, setBackdropOpen] = useState(false);

    const handleBackdropClose = () => setBackdropOpen(false);

    const handleBackdropOpen = () => setBackdropOpen(true);

    return (
        <>
            <Backdrop open={backdropOpen}>
                <CircularProgress variant="indeterminate"
                                  size={40}
                                  thickness={4}
                                  color="inherit" />
            </Backdrop>
            <BackdropContext.Provider value={{
                startWait: handleBackdropOpen,
                stopWait: handleBackdropClose
            }}>
                {children}
            </BackdropContext.Provider>
        </>
    );
};

export default BackdropProvider;
