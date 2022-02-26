import type {Option} from "vtm-baires-next-utils/index";
import {graphql, GraphQLTaggedNode} from "relay-runtime";

export type HavenEvent = {
    readonly id: string,
    readonly character: Option<{
        readonly id: string,
        readonly name: Option<string>,
    }>,
    readonly haven: Option<{
        readonly id: string,
        readonly name: Option<string>,
        readonly x: Option<number>,
        readonly y: Option<number>,
        readonly character: Option<{
            readonly id: string,
            readonly name: Option<string>,
        }>,
    }>,
    readonly resolved: Option<boolean>,
    readonly controlTriggered: Option<boolean>,
    readonly dangerTriggered: Option<boolean>,
    readonly insertedAt: Option<any>,
    readonly updatedAt: Option<any>,
};

export const havenEventFragment: GraphQLTaggedNode = graphql`
    fragment HavenEventFragment_fragment on HavenEvent {
        id
        character {
            id
            name
        }
        haven {
            id
            name
            x
            y
            character {
                id
                name
            }
        }
        resolved
        controlTriggered
        dangerTriggered
        insertedAt
        updatedAt
    }
`;
