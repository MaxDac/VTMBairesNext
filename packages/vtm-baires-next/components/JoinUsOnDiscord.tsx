import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

const JoinUsOnDiscord = (): JSX.Element => {
    return (
        <Box sx={{
            textAlign: "center"
        }}>
            <a href="https://discord.gg/3wHD3er8Du"
               target="_blank"
               rel="noreferrer">
                <Image src="/discord.svg"
                       width="40px"
                       height="46px"
                       className="discord-image"
                       alt="discord" />
            </a>
                <Typography variant="body2" color="textSecondary" align="center" sx={{
                    whiteSpace: "break-spaces"
                }}>
                    Stai riscontrando un problema? Contattaci su&nbsp;
                    <a href="https://discord.gg/3wHD3er8Du"
                       target="_blank"
                       rel="noreferrer">
                        <Typography component="span" variant="body2" sx={{
                            color: "#C92929"
                        }}>
                            Discord
                        </Typography>
                    </a>
                </Typography>
        </Box>
    );
}

export default JoinUsOnDiscord;
