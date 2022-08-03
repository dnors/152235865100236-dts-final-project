import { Box, Divider, Typography } from "@mui/material";
import { Fragment } from "react";
import Body from "../components/Body";
import PhoneCarousel from "../components/carousel/PhoneCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";

const Home = () => {
    return (
        <Fragment>
            <Body>
                <Header />
                <Main>
                    <Section>
                        <Box mb={35}>
                            <Typography variant="h6" component="h1">Produk Terbaru</Typography>
                            <Divider sx={{ my: 1 }} />
                            <PhoneCarousel kategori="latest" />
                        </Box>
                    </Section>
                </Main>
                <Footer />
            </Body>
        </Fragment>
    )
}

export default Home;