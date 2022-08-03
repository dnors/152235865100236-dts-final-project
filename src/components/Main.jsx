import { Container } from "@mui/material"
import { Fragment } from "react";

const Main = ({ children }) => {
    return (
        <Fragment>
            <Container>
                {children}
            </Container>
        </Fragment>
    )
}

export default Main;