import {ReactElement, useEffect, useRef} from "react";
import {ChatEntry} from "vtm-baires-next-services/graphql-queries/data-utils";
import useCharacterSession from "../../session/hooks/useCharacterSession";
import useSubscriptionTokenQuery
    from "vtm-baires-next-services/graphql-queries/queries/accounts/SubscriptionTokenQuery";
import {showDesktopNotification, useCustomSnackbar} from "../../../vtm-baires-next-components/src/components/notifications";
import subscriptionObservable from "vtm-baires-next-services/graphql-queries/subscriptions/ChatSubscription";
import {subscribe} from "vtm-baires-next-utils";

const useChatSubscription = (id: string,
                             setAdditionalEntries: (handler: (chatEntry: Array<ChatEntry>) => Array<ChatEntry>) => void) => {
    const [character,] = useCharacterSession();
    const chatToken = useSubscriptionTokenQuery();
    const {enqueueSnackbar} = useCustomSnackbar()

    const setAdditionalEntriesRef = useRef(setAdditionalEntries);

    useEffect(() => {
        const handleUnhandledExceptionAtChat = (e: any) => {
            console.error("Unhandled error while subscribing", e);

            if (typeof e === "string" && e.indexOf("message [") !== -1) {
                document.location.reload();
            }
        };

        window.addEventListener("unhandledrejection", handleUnhandledExceptionAtChat);

        const showNewChatEntry = (entry: ChatEntry) => {
            if (entry?.command === "DELETE") {
                setAdditionalEntriesRef.current(es =>
                    es.filter(e =>
                        e?.id != null &&
                        e.id !== entry?.id));
            }
            else {
                if (entry?.character?.id !== character?.id) {
                    showDesktopNotification("Chat", "Hai ricevuto un nuovo messaggio");
                }

                setAdditionalEntriesRef.current(es => [...es, entry]);
            }
        }

        const performSubscription = (token: string) =>
            subscribe(subscriptionObservable(id, token), showNewChatEntry, (e, _) => {
                console.error("Error while performing chat subscription.", e);
                // enqueueSnackbar({
                //     type: AlertType.Error,
                //     message: "C'è stato un problema nella connessione della chat, ricarica la pagina per ritentare."
                // });
                // Trying to reload the page instead
                document.location.reload();
            });

        if (chatToken != null && chatToken !== "") {
            console.debug("subscribing");
            const subscription = performSubscription(chatToken);
            return () => {
                console.debug("unsubscribing");
                window.removeEventListener("unhandledrejection", handleUnhandledExceptionAtChat);
                subscription.unsubscribe();
            };
        }
    }, [id, chatToken, character?.id]);
}

export default useChatSubscription;
