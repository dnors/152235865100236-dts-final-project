import { Box } from "@mui/material";
import { Fragment } from "react";

const Section = ({ children }) => {
    return (
        <Fragment>
            <Box my={5}>
                {children}
            </Box>
        </Fragment >
    );
}

export default Section;