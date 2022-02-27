import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import React from "react";
import {useTheme} from "@mui/material/styles";

const SubMapResponsive = ({imageUrl, subHeader, mapLinks}: any) => {
    const theme = useTheme();

    return (
        <Container maxWidth="lg" sx={{
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        }}>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{
                        background: `url('${imageUrl}')`,
                        border: "1px white solid",
                        backgroundPosition: "center center"
                    }}>
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
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SubMapResponsive;
