import React from "react";
import Tooltip from "@mui/material/Tooltip";
import ListItemIcon from "@mui/material/ListItemIcon";
import AttributionIcon from "@mui/icons-material/Attribution";
import {menuIconStyle} from "../menu/menu-base-utils";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ShowCharacterSheet from "../button-links/ShowCharacterSheet";
import SendMessageToUser from "../button-links/SendMessageToUser";
import GoToMapLocation from "../button-links/GoToMapLocation";
import SendMessageToCharacter from "../button-links/SendMessageToCharacter";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import type {ReactElement} from "react";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {listSessionQuery} from "vtm-baires-next-services/graphql-queries/queries/accounts/SessionQuery";
import {
    SessionQuery
} from "vtm-baires-next-services/graphql-queries/queries/accounts/__generated__/SessionQuery.graphql";
import {User} from "vtm-baires-next-services/graphql-queries/data-utils";
import MenuLayout from "../../base/MenuLayout";

type Props = {
    closePopup: () => void;
}

const OnlineControlDialog = ({closePopup}: Props): ReactElement[] => {
    const theme = useTheme();
    const online = useCustomLazyLoadQuery<SessionQuery>(listSessionQuery, {}, {
        fetchPolicy: "network-only"
    })?.sessionsList ?? [];

    const isUserMaster = (user: User) => user?.role != null && user.role === "MASTER";

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const userMasterIcon = (user: User) =>
        isUserMaster(user)
            ? (
                <Tooltip title="Master">
                    <ListItemIcon>
                        <AttributionIcon sx={menuIconStyle} />
                    </ListItemIcon>
                </Tooltip>
            )
            : (<></>);

    const secondaryActions = (o: any) =>
        isSmallScreen
            ? (<OnlineControlActionsSmallScreen o={o} closePopup={closePopup} />)
            : (<OnlineControlActionsBigScreen o={o} closePopup={closePopup} />);

    const onlineUserAndCharacterName = (o: any) => {
        if (o?.character?.name != null) {
            return `${o.character.name} (${o.user?.name ?? ""})`;
        }

        return `${o?.user?.name ?? ""}`;
    };

    const onlineRow = (o: any): ReactElement => (
        <ListItem key={o?.user?.id}
                  secondaryAction={secondaryActions(o)}>
            {userMasterIcon(o?.user)}
            <ListItemText inset={!isUserMaster(o?.user)}
                          primary={onlineUserAndCharacterName(o)}
                          secondary={o?.location?.name}
            />
        </ListItem>
    );

    const onlineUserSorter = (a: any, b: any) => {
        const masterRoleAsNumber = (u: any) => u?.user?.role === "MASTER" ? 0 : 1;
        const [aRole, bRole] = [masterRoleAsNumber(a), masterRoleAsNumber(b)];

        if (aRole > bRole) {
            return 1;
        }

        if (aRole < bRole) {
            return -1;
        }

        const [aName, bName] = [a?.user?.name ?? "", b?.user?.name ?? ""];

        if (aName > bName) {
            return 1;
        }

        return -1;
    };

    // Used the rest operator because the read only array doesn't have a sort method
    const showOnline = () => [...online]
        ?.sort((a, b) => onlineUserSorter(a, b))
        ?.map(o => onlineRow(o)) ?? (<></>);

    return showOnline();
};

const OnlineControlActionsBigScreen = ({o, closePopup}: any) => (
    <Stack direction="row">
        <ShowCharacterSheet characterId={o?.character?.id} onSelected={closePopup} />
        <SendMessageToUser userId={o?.user?.id} onSelected={closePopup} />
        {
            o?.character != null
                ? (<SendMessageToCharacter characterId={o?.character?.id} onSelected={closePopup} />)
                : (<></>)
        }
        <GoToMapLocation location={o?.location} onSelected={closePopup} />
    </Stack>
);

const OnlineControlActionsSmallScreen = ({o, closePopup}: any) => {
    const onSelected = (onItemSelected: () => void) =>
        () => {
            onItemSelected();
            closePopup();
        };

    return (
        <MenuLayout>
            { onItemSelected =>
                <>
                    <ShowCharacterSheet characterId={o?.character?.id}
                                        onSelected={onSelected(onItemSelected)}
                                        asMenuItem />
                    <SendMessageToUser userId={o?.user?.id}
                                       onSelected={onSelected(onItemSelected)}
                                       asMenuItem />
                    {
                        o?.character != null
                            ? (<SendMessageToCharacter characterId={o?.character?.id}
                                                       onSelected={onSelected(onItemSelected)}
                                                       asMenuItem />)
                            : (<></>)
                    }
                    <GoToMapLocation location={o?.location}
                                     onSelected={onSelected(onItemSelected)}
                                     asMenuItem />
                </>
            }
        </MenuLayout>
    );
}

export default OnlineControlDialog;
