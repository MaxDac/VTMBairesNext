import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SetNewPassword from "../../components/settings/SetNewPassword";
import type {ReactElement} from "react";
import MainLayout from "../../components/layouts/MainLayout";

const Index = (): ReactElement => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <SetNewPassword />
                </Grid>
            </Grid>
        </Container>
    );
}

Index.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Index;
