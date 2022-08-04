import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useParams } from "react-router-dom";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";

import 'swiper/css';
import 'swiper/css/autoplay';

const PhoneData = (data) => {
    const param = useParams();
    const [phone, setMovie] = useState([]);

    useEffect(() => {
        (async () => {

            const result = await axios.get('https://api-mobilespecs.azharimm.site/v2/' + param.phone_slug );
            setMovie(result.data.data);

        })();
    });

    return (
        <Fragment>
            <Body>
                <Header />
                <Main>
                    <Section>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={4}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        image={`${phone.thumbnail}`}
                                        alt="phone backdrop"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                <Card sx={{ bgcolor: '#ebe9e4' }}>
                                    <CardContent>
                                        <Box display="flex" justifyContent="space-between" alignItems="center">
                                            <Box>
                                                <Typography variant="h5" component="h1">{phone.phone_name}</Typography>
                                                <Typography variant="body1">{phone.brand}</Typography>
                                            </Box>
                                        </Box>
                                        <Divider sx={{ my: 2 }} />                                        
                                        <Box my={3}>
                                            <Typography variant="body2">Sistem Operasi : {phone.os}</Typography>
                                            <Typography
                                                variant="body2">
                                                Kapasitas&nbsp;:&nbsp;
                                                <NumberFormat
                                                    value={phone.storage}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                />
                                            </Typography>
                                            <Typography
                                                variant="body2">
                                                Dimensi&nbsp;:&nbsp;
                                                <NumberFormat
                                                    value={phone.dimension}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                />
                                            </Typography>
                                            <Typography variant="body2">{phone.release_date}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Section>
                </Main>
                <Footer />
            </Body>
        </Fragment>
    )
}

export default PhoneData;