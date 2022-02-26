import type {ReactElement} from "react";
import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";
import {Routes} from "../../../base/routes";

type Props = {
    children: any;
}

const ReturnToMessagesControl = ({children}: Props): ReactElement => {
    const router = useRouter();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Button type="button" onClick={(_: any) => router.push(Routes.messages)}>Torna ai messaggi</Button>
            </Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    );
}

export default ReturnToMessagesControl;
