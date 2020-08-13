import React from 'react';

import avatar from '../../src/nasa.png';

import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typografy,
    Box,
    Typography
} from "@material-ui/core";
import {
   ArrowBack,
   Person,
   Home,
   Apps,
   Build,
   Info 
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "rgb(34, 34, 34)",
        height: "30rem"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
        paddingTop: "10px"
    },
    listItem: {
        color: "#eceff1"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <Apps />,
        listText: "Launches"
    },
    {
        listIcon: <Build />,
        listText: "Rockets"
    },
    {
        listIcon: <Person />,
        listText: "Crew"
    },
    {
        listIcon: <Info />,
        listText: "About"
    }
]

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
        <Box className={ classes.menuSliderContainer } component="div">
            <Avatar className={classes.avatar} src={avatar} alt="avatar" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => ( 
                <ListItem button key={key}>
                    <ListItemIcon className={ classes.listItem }>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={ classes.listItem } primary={lsItem.listText} /> 
                </ListItem>
                 )) }
            </List>
        </Box>
        <Box component="nav" >
            <AppBar position="sticky" style={{background: '#222'}}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack style={{ color: '#455a64' }} />
                    </IconButton>
                    <Typography variant="h5" style={{ color: "#ffffff" }}>
                        Launches
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar;