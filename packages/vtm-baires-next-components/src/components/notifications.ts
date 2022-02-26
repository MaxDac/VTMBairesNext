import {SnackbarKey, useSnackbar} from "notistack";
import {parseGraphqlMessage} from "vtm-baires-next-utils/src/relay-utils";
import {AlertInfo, AlertType, tryTranslateError} from "vtm-baires-next-utils";

const alertTypeToString = (type: AlertType): 'success' | 'warning' | 'error' | 'info' => {
    switch (type) {
        case AlertType.Success: return 'success';
        case AlertType.Warning: return 'warning';
        case AlertType.Error: return 'error';
        default: return 'info';
    }
}

const defaultSnackbarVariant = {
    autoHideDuration: 3000,
    // snackbarActions
}

export type CustomProviderContext = {
    enqueueSnackbar: (message: AlertInfo) => SnackbarKey;
    closeSnackbar: (key?: SnackbarKey) => void;
}

/**
 * Customizes the snackbar creation method, wrapping it around the custom message management.
 */
export const useCustomSnackbar = (): CustomProviderContext => {
    const {enqueueSnackbar, closeSnackbar} = useSnackbar()

    const enqueueSnackbarCustom = ({type, graphqlErrors, message, duration, key}: AlertInfo) => {
        if (graphqlErrors && graphqlErrors?.errors?.length > 0) {
            const e = tryTranslateError(parseGraphqlMessage(graphqlErrors, message));
            return enqueueSnackbar(e, {
                ...defaultSnackbarVariant,
                variant: alertTypeToString(type),
                autoHideDuration: duration ?? defaultSnackbarVariant.autoHideDuration,
                key: key
            });
        }
        else {
            return enqueueSnackbar(message, {
                ...defaultSnackbarVariant,
                variant: alertTypeToString(type),
                autoHideDuration: duration ?? defaultSnackbarVariant.autoHideDuration,
                key: key
            });
        }
    };

    return {
        enqueueSnackbar: enqueueSnackbarCustom,
        closeSnackbar
    }
}

export const requestDesktopNotificationPermission = () => {
    Notification.requestPermission(perm => console.debug("permission", perm));
};

export const showDesktopNotification = (title: string, text: string, tag?: string) => {
    if (Notification.permission === "granted") {
        const notification = new Notification(title, {
            dir: "auto",
            lang: "IT-it",
            body: text,
            tag: tag
        });
        console.debug("new notification", notification);
    }
    else {
        console.warn("Notifications not allowed");
    }
}
