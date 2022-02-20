import {logout} from "./login-service";

export const performLogout = (onLogoutCompleted: () => void) => {
    const clearClientSession = () => {
        localStorage.clear();
        sessionStorage.clear();
        onLogoutCompleted();
    }

    const handleUnhandledExceptionAtLogout = (e: Error | any) => {
        console.error("Unhandled error", e);
        clearClientSession();
    };

    window.addEventListener("unhandledrejection", handleUnhandledExceptionAtLogout);

    try {
        logout()
            .catch(e => {
                console.error("Error while performing logout", e);
            })
            .finally(() => {
                clearClientSession();
            });
    }
    catch (e) {
        console.error("Catastrophic error", e);
        clearClientSession();
    }
    finally {
        window.removeEventListener("unhandledrejection", handleUnhandledExceptionAtLogout);
    }
};