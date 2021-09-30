/* import React, { useContext } from 'react';


const Login = () => {
    const{ isLogin, setIsLogin} = useContext(MainContext);
    const handleClick = () => {setIsLogin(!isLogin)};
    return (
        <div>
        {isLogin ? <h1>Hosgeldin</h1> : <h1>Güle Güle</h1>}
        <button onClick= {handleClick}>Reset</button>
        </div>
        )
    }
    */

import * as React from 'react';
import { useContext } from 'react';
import { MainContext } from '../context/MainContext';
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blok from "../assets/blok.png";
import { useHistory } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const history = useHistory();
    const { isLogin, setIsLogin } = useContext(MainContext);


    return (
        <div style={{ backgroundImage: `url(https://sarkac.org/wp-content/uploads/2018/07/aurora.jpg` }}>
            <ThemeProvider theme={theme}  >
                <Container component="main" maxWidth="xs" sx={{ bgcolor: "white", boxShadow: 3, paddingTop: 4, paddingBottom: 1, }} >
                    <CssBaseline />
                    <Box
                        sx={{
                            paddingTop: 4,
                            paddingBottom: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: 4,
                        }}
                    >
                        <img src={blok} alt="login" style={{ height: "150px" }} />
                        <Typography component="h1" variant="h5">
                            ----- LOGIN -----
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}

                            >
                                LOGIN
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </div>
    );
}
