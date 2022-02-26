import React, {ReactElement} from "react";
import {performLogout} from "vtm-baires-next-services/graphql-queries/logout-service";
import {useRouter} from "next/router";
import type {ErrorFallbackProps} from "vtm-baires-next-components";
import {ErrorBoundaryWithRetry} from "vtm-baires-next-components";
import Typography from "@mui/material/Typography";
import {useSnackbar} from "notistack";
import {Routes} from "./routes";
import {AlertType} from "vtm-baires-next-utils";

export type ErrorBoundaryProps = {
    children: JSX.Element
}

const ErrorBoundary = ({children}: ErrorBoundaryProps) => {
    const router = useRouter();
    const {enqueueSnackbar} = useSnackbar()

    const fallback = ({error}: ErrorFallbackProps): ReactElement => {
        console.error("An unhandled error happened in the app", error)

        enqueueSnackbar({
            type: AlertType.Error,
            message: "There was an error in the application"
        });

        return (
            <Typography>
                There was an error in the app: {JSON.stringify(error)}
            </Typography>
        );
    };

    // TODO - Add the check of the session
    const checkSessionWrapper = (): Promise<boolean> => Promise.resolve(false);

    return (
        <ErrorBoundaryWithRetry fallback={fallback}
                                onUnauthorized={() => performLogout(() => router.push(Routes.sessionExpired))}
                                checkSession={checkSessionWrapper}>
            {children}
        </ErrorBoundaryWithRetry>
    );
}

export default ErrorBoundary
