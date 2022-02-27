import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import React from "react";
import {useTheme} from "@mui/material/styles";

const SubMapWide = ({imageUrl, subHeader, mapLinks}: any) => {
    const theme = useTheme();

    return (
        <Container maxWidth="lg" sx={{
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        }}>
            <Grid container>
                <Grid item xs={12} sm={8} md={9}>
                    <img src={imageUrl} style={{
                        maxWidth: "70vw"
                    }} alt="map" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Paper elevation={0} variant="outlined">
                        <List component="nav"
                              aria-labelledby="nested-list-subheader"
                              subheader={subHeader()}
                              sx={{
                                  width: '100%',
                                  maxWidth: 360,
                                  backgroundColor: "#19191980"
                              }}>
                            {mapLinks()}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SubMapWide;
