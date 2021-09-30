import React, { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { languages } from '../helper/Data';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom';


const Details = () => {
    const { cardInfo } = useContext(MainContext);

    const history = useHistory();



    const handleUpdate = () => {
        history.push("/update");
        
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card
                    sx={{ display: "flex", justifyContent: "center", flexFlow: "column", width: "50%" }}

                >
                    <h1 style={{ color: "blue" }}>---------  DETAILS ---------</h1>
                    <div>
                        <CardMedia
                            component="img"
                            sx={{
                                // 16:9
                                //width: "100%",
                                //height: 250,
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "50%",

                            }}
                            image={cardInfo.img}
                            alt="language"
                        />
                    </div>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {cardInfo.name}
                        </Typography>
                        <Typography>
                            {cardInfo.explains}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="favorite">
                            <FavoriteIcon />
                        </IconButton>
                        <p>0</p>
                        <IconButton aria-label="favorite">
                            <ChatBubbleOutlineIcon />
                        </IconButton>
                        <p>0</p>
                    </CardActions>
                </Card>
            </div >
            <Stack direction="row" spacing={24} sx={{ display: "flex", justifyContent: "center" }}>
                <Button variant="contained" color="inherit" sx={{ width: 15, marginTop: 1 }} onClick={handleUpdate}>
                    UPDATE
                </Button>
                <Button variant="contained" color="error" sx={{ width: 15, marginTop: 1 }}>
                    DELETE
                </Button>
            </Stack>
        </>
    )
}

export default Details;
