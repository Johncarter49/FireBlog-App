import * as React from 'react';
//import AppBar from '@mui/material/AppBar';
//import Button from '@mui/material/Button';
//import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
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
import { useHistory } from 'react-router-dom';
import { MainContext } from '../context/MainContext';
import { useContext } from 'react';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/main">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();


export default function Cards() {
    const history = useHistory();
    
    const handleClick = (language) => {
        setCardInfo(language);
        history.push("/details");
    };
    
    const { cardInfo, setCardInfo } = useContext(MainContext);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h2"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            ----------- DASHBOARD -----------
                        </Typography>

                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {languages.map((language) => (
                            <Grid item key={language} xs={12} sm={6} md={4} >
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                                    onClick={()=> handleClick(language)}

                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            width: 250,
                                            height: 180,
                                        }}
                                        image={language.img}
                                        alt="languages"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {language.name}
                                        </Typography>
                                        <Typography>
                                            {language.explains}
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
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}