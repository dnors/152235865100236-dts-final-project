import { Box, Container, Typography } from "@mui/material";
import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <Box p={2} sx={{ bgcolor: '#222831' }}>
                <Container>
                    <Box>
                        <Typography align="center" variant="body1" color="GrayText"> Deno Norsanto | 152235865100-236 </Typography>
                        <Typography align="center" variant="body2" color="GrayText"> Final Project REA2B - DTS KOMINFO 2022</Typography>
                    </Box>
                </Container>
            </Box>
        </Fragment>
    );
}

export default Footer;