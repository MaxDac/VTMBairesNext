import type {Attribute, AttributeTypeNames} from "./queries/info/AttributesQuery";
import {sortStrings} from "vtm-baires-next-utils";
import type {Option} from "vtm-baires-next-utils";
import {Character} from "./queries/character/GetCharacterCompleteQuery";

const sortForAttributes = (a: Attribute, b: Attribute): number => sortStrings(a.id, b.id);

const sortForSkills = (a: Attribute, b: Attribute): number => {
    if (a?.name != null && b?.name != null) {
        return sortStrings(a.name, b.name);
    }

    return 0;
};

export type AttributeSorter = (attribute1: Attribute, attribute2: Attribute) => number;

export const getAttributeSectionOrder = (attributeSection: string): number => {
    switch (attributeSection) {
        case "Mental": return 3;
        case "Social": return 2;
        default: return 1;
    }
}

export const sortAttributesSection = (first: string, second: string): number => {
    const [firstOrder, secondOrder] = [getAttributeSectionOrder(first), getAttributeSectionOrder(second)];
    return firstOrder - secondOrder;
}

/**
 * Sorts the attributes.
 * @param attributeType: The attribute type name.
 * @return {(function(Attribute, Attribute): number)|*} The sorting function.
 */
export const sortAttributes = (attributeType: AttributeTypeNames): AttributeSorter =>
    (a: Attribute, b: Attribute): number => {
        if (a?.attributeType?.section != null &&
            b?.attributeType?.section != null &&
            a.attributeType.section !== b.attributeType.section) {
            return sortAttributesSection(a.attributeType.section, b.attributeType.section);
        }

        return attributeType === "Attribute"
            ? sortForAttributes(a, b)
            : sortForSkills(a, b);
    };

export type ChatCommand = "DELETE" | "INSERT" | "%future added value";
export type Roles = "MASTER" | "PLAYER";

export type User = {
    email: string;
    id: string;
    name: string;
    role: Roles;
};

export const isUserRoleMaster = (role: Option<Roles>): boolean =>
    role != null && role === "MASTER";

export const isUserMaster = (user: Option<User>): boolean =>
    user?.role != null && isUserRoleMaster(user.role);

export type BaseInfo = {
    id: number;
    name: string;
}

export type ChatEntry = {
    id: string;
    text: string;
    result: string;
    offGame: boolean;
    master: boolean;
    hide: boolean,
    command: ChatCommand,
    character: {
        id: string;
        name: string;
        chatAvatar?: string;
    },
    chatMap: {
        id: string;
    },
    insertedAt: string;
}

export type Map = {
    id: string,
    name: string,
    description: string,
    image: string;
    isChat: boolean;
    isPrivate: boolean;
}

export const convertToMap: (amorphousObject: any) => Map = ({
                                                                id,
                                                                name,
                                                                description,
                                                                image,
                                                                isChat,
                                                                isPrivate
                                                            }) => ({
    id,
    name,
    description,
    image,
    isChat,
    isPrivate
} as Map);
