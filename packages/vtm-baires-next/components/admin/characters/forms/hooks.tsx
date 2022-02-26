import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import React, {ReactElement} from "react";
import useAttributesSlimQuery from "vtm-baires-next-services/graphql-queries/queries/info/AttributesSlimQuery";
import type {Attribute} from "vtm-baires-next-services/graphql-queries/queries/info/AttributesQuery";
import type {Option} from "vtm-baires-next-utils";

export const UseAttributeSelectOptions = (addEmptyOption?: boolean): [Option<Attribute[]>, () => Option<any[]>] => {
    const attributes = useAttributesSlimQuery() ?? [];

    const newAttributeSection = (sectionName: string): ReactElement =>
        (<ListSubheader key={sectionName}>{sectionName}</ListSubheader>);

    const attributeSelector = (id: Option<string>, name: string): ReactElement =>
        (<MenuItem key={id ?? ""} value={id ?? ""}>{name}</MenuItem>);

    const getAdminDashboardAttributesValues = () => attributes
        .reduce<[ReactElement[], string]>(([acc, previousTypeName], a) => {
            if (a?.id != null && a?.name != null && a?.attributeType?.name != null) {
                const {id, name, attributeType: {name: typeName}} = a;
                const newAcc =
                    typeName !== previousTypeName
                        ? [...acc, newAttributeSection(typeName)]
                        : acc;

                return [[...newAcc, attributeSelector(id, name)], typeName];
            }

            return [acc, previousTypeName];
        }, [[], ""]);

    if (addEmptyOption === true) {
        const emptyOption = attributeSelector(null, "None");
        const [attributeSelections,] = getAdminDashboardAttributesValues()
        return [attributes, () => [emptyOption].concat(attributeSelections)];
    }

    return [attributes, getAdminDashboardAttributesValues];
}
