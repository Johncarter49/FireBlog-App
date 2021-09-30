import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
//import Switch from '@mui/material/Switch';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MainContext } from '../context/MainContext';
import { useContext } from 'react';


export default function Navbar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const history = useHistory();

    const { isLogin } = useContext(MainContext);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogin = () => {
        history.push("/login");
        setAnchorEl(null);
    };
    const handleRegister = () => {
        history.push("/register");
        setAnchorEl(null);
    };
    const handleCard = () => {
        history.push("/main");
        setAnchorEl(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 0 }}>
                        <img style={{ width: 130, borderRadius: 16 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nkauTm0CErv6pFsm8GFnDVnsmI2FK1geOfFBnckNGT2BQzrdI3kWJRr44whf8oR2VTQ&usqp=CAU" alt="Clarusway" />
                    </Box>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button href="/main" color="inherit" size="large">{`<Clarusway/> BLOG`}</Button>
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {!isLogin ? <MenuItem onClick={handleLogin} >Login</MenuItem> : null}
                                {!isLogin ?<MenuItem onClick={handleRegister}>Register</MenuItem> : null}
                                {isLogin ? <MenuItem onClick={handleLogin} >NewBlock</MenuItem> : null}
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}