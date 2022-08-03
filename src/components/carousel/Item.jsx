import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

const Item = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{ cursor: 'pointer', bgcolor: '#ffffff' }}
            onClick={() => navigate(`/${data.brand_slug}`)}
        >
            <CardContent>
                <img
                    src={`${data.image}`}
                    alt="phone image"
                    className="PhoneListItem-img"
                />
                <Box>
                    <Divider sx={{ marginY: 0.2 }} />
                    <Typography variant="body1" noWrap> {data.phone_name} </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Item;