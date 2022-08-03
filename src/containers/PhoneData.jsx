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

const PhoneData = () => {
    const param = useParams();

    const [movie, setMovie] = useState({ production_companies: [] });
    const [movieVideo, setmovieVideo] = useState({ production_companies: [] });

    useEffect(() => {
        (async () => {

            const result = await axios.get('https://api-mobilespecs.azharimm.site/v2/' + param.id, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                }
            });

            const resultVideo = await axios.get('https://api-mobilespecs.azharimm.site/v2/' + param.id + '/videos', {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                }
            });

            setMovie(result.data);
            setmovieVideo(resultVideo.data);

        })();
    }, []);

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
                                        height="600"
                                        image={`https://fdn2.gsmarena.com/vv/bigpic/${movie.image}`}
                                        alt="movie backdrop"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                <Card sx={{ bgcolor: '#222831' }}>
                                    <CardContent>
                                        <Box display="flex" justifyContent="space-between" alignItems="center">
                                            <Box>
                                                <Typography variant="h5" component="h1">{movie.phone_name}</Typography>
                                                <Typography variant="body1">{movie.slug}</Typography>
                                            </Box>
                                        </Box>
                                        <Divider sx={{ my: 2 }} />
                                        <Box my={3}>
                                            <Typography variant="body2">Rilis pada tanggal : {movie.release_date}</Typography>
                                            <Divider sx={{ marginY: 0.3 }} />
                                            <Typography variant="body1">{movie.overview}</Typography>
                                        </Box>
                                        <Box my={3}>
                                            <Typography
                                                variant="body2">
                                                Budget&nbsp;:&nbsp;
                                                <NumberFormat
                                                    value={movie.budget}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                />
                                            </Typography>
                                            <Typography
                                                variant="body2">
                                                Pendapatan&nbsp;:&nbsp;
                                                <NumberFormat
                                                    value={movie.revenue}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                />
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Box my={3}>
                                                <Typography variant="h6" component="h6">Triler</Typography>
                                            </Box>
                                            <Box>
                                                <iframe
                                                    width="100%"
                                                    height="480"
                                                    src={`https://www.youtube.com/embed/${movieVideo.key}`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Embedded youtube"
                                                />
                                            </Box>
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