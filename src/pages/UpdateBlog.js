import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

/* const UpdateBlog = () => {
    return (
        <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            Title
            ImageURL
            Content
        </div>
    )
} */
export default function UpdateBlog() {
    const { cardInfo } = useContext(MainContext);
    
    const [value, setValue] = React.useState(`${cardInfo.name}`);
    
    const [url, setUrl] = React.useState(`${cardInfo.img}`)
    const [explain, setExplain] = React.useState(`${cardInfo.explains}`)


    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleUrl = (event) => {
        setUrl(event.target.value);
    };
    const handleExplain = (event) => {
        setExplain(event.target.value);
    };

    return (
        <Card
        sx={{ display: "block",
        marginLeft: "auto",
        marginRight: "auto", 
        width: "50%",
        marginTop: 2,
        marginBottom: 2 }}
        >
            <CardMedia
            component="img"
            sx={{
                // 16:9
                //width: "100%",
                //height: 250,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "30%",

            }}
            image={cardInfo.img}
            alt="language"
        />
                <h3>------- UPDATED BLOG -------</h3>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '40ch' },
                }}
                noValidate

            >
                <div
                    style={{
                        display: "flex", justifyContent: "center", flexDirection: "column",
                        marginLeft: "auto",
                        marginRight: "auto",
                        
                        width: "55%",
                        textAlign: "center"
                    }}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Title"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}

                    />
                    <TextField 
                    id="outlined-basic" 
                    label="ImageURL" 
                    variant="outlined"
                    value={url}
                    onChange={handleUrl} />

                    <TextField
                        id="outlined-multiline-static"
                        label="Content"
                        multiline
                        rows={12}
                        value={explain}
                        onChange={handleExplain}
                    />
                    <Button variant="contained" color="primary" sx={{marginBottom:2, marginLeft:1, width:400}}> UPDATE</Button>
                </div>
            </Box>
        </Card>

    )
}

   /*  <h1 style={{ color: "blue" }}>---------  DETAILS ---------</h1>
    <div>
        
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
    </CardActions> */