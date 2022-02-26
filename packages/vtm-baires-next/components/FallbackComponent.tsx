import React, {ReactElement} from "react";
import MainLayout from "./MainLayout";
import Typography from "@mui/material/Typography";
import type {Option} from "vtm-baires-next-utils";

type Props = {
    error: any,
    retry: Option<() => void>,
}

const FallbackComponent = ({error}: Props): ReactElement => {
    return (
        <MainLayout>
            <Typography>
                There was an error in the app: {JSON.stringify(error)}
            </Typography>
        </MainLayout>
    )
}

export default FallbackComponent;
