import MainComponent from "../components/Main";
import { Fragment, useRef } from "react"
import Body from "../components/Body"
import Header from "../components/Header"
import Section from "../components/Section"
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    const container = useRef(null);

    return (
        <Fragment>
            <Body>
                <Header />
                <MainComponent>
                    <Section>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} md={4}>
                                <Card sx={{ bgcolor: '#f7f7f5' }}>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography align="center" variant="body1"> Temukan informasi seputar gadget terkini </Typography>
                                        <Box ref={container} />
                                        <Box mt={5}>
                                            <Button fullWidth variant="contained" color="info" onClick={() => { navigate('/login') }}> Login </Button>
                                            <Divider sx={{ marginY: 2, color: 'white' }}> <Typography color="GrayText">atau</Typography> </Divider>
                                            <Button fullWidth variant="contained" color="secondary" onClick={() => { navigate('/registration') }}> registrasi </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Section>
                </MainComponent>
            </Body>
        </Fragment >
    )
}

export default Main;