import React, {ReactElement, useMemo} from "react";
import {useCustomLazyLoadQuery, orderAlphabetically} from "vtm-baires-next-utils";
import {allUsersQuery} from "vtm-baires-next-services/graphql-queries/queries/accounts/AllUsersQuery";
import {
    AllUsersQuery
} from "vtm-baires-next-services/graphql-queries/queries/accounts/__generated__/AllUsersQuery.graphql";
import {FormSelectField} from "vtm-baires-next-components";

type Props = {
    label: string;
    formik: any;
}

const UsersSelectControl = ({label, formik}: Props): ReactElement => {
    const allUsers = useCustomLazyLoadQuery<AllUsersQuery>(allUsersQuery, {})?.allUsers;

    const userValues = useMemo((): Array<[string, string]> => {
        const values: Array<[string, string]> = allUsers
            ?.map(v => [v?.id ?? "", v?.name ?? ""] as [string, string])
            ?.sort(([_aId, aName], [_bId, bName]) => orderAlphabetically(aName, bName)) ?? [];

        return ([["", "None"]] as [string, string][]).concat(values);
    }, [allUsers]);

    return (
        <FormSelectField formik={formik}
                         fieldName="userId"
                         label={label}
                         values={userValues} />
    );
}

export default UsersSelectControl;
