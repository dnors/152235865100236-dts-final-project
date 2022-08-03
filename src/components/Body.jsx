import { Box } from "@mui/material";
import { Fragment } from "react";

const Body = ({ children }) => {
    return (
        <Fragment>
            <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
                {children}
            </Box>
        </Fragment>
    )
}

export default Body;