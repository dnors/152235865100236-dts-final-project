import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";

const Item = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{ cursor: 'pointer', bgcolor: '#ffffff' }}
            onClick={() => navigate(`/phone-detail/${data.slug}`)}
        >   
            <CardMedia
                component="img"
                height="400"
                image={`${data.image}`}
                alt="phone background"
            />
            <CardContent>
                <Box>
                    <Divider sx={{ marginY: 0.2 }} />
                    <Typography variant="body1" noWrap> {data.phone_name} </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Item;