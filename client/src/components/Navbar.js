import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';

import avatar from '../../src/nasa.png';
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
    Box,
    Typography
} from '@material-ui/core';
import {
   ArrowBack,
   Person,
   Home,
   Apps,
   Build,
   Info 
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: 'rgb(34, 34, 34)',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),
        paddingTop: '10px'
    },
    listItem: {
        color: '#eceff1'
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listLink: '/'
    },
    {
        listIcon: <Apps />,
        listText: 'Launches',
        listLink: '/launches'
    },
    {
        listIcon: <Build />,
        listText: 'Rockets',
        listLink: '/rockets'
    },
    {
        listIcon: <Person />,
        listText: 'Crew',
        listLink: '/crew'
    },
    {
        listIcon: <Info />,
        listText: 'About',
        listLink: '/about'
    }
]

const Navbar = (props) => {
    const [state, setState] = useState({
        right: false
    })

    const toogleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    }

    const classes = useStyles();

    const sideList = slider => (
        <Box className={ classes.menuSliderContainer } component="div" onClick={toogleSlider(slider, false)} >
            <Link to='/'>
                <Avatar className={classes.avatar} src={avatar} alt="avatar" />
            </Link>
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => ( 
                <ListItem button key={key}>
                    <ListItemIcon className={ classes.listItem }>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <Link to={lsItem.listLink}>
                        <ListItemText className={ classes.listItem } primary={lsItem.listText} />
                    </Link> 
                </ListItem>
                 )) }
            </List>
        </Box>
    );

    return (
        <Box component="nav" >
            <AppBar position="sticky" style={{background: '#222'}}>
                <Toolbar>
                    <IconButton onClick={toogleSlider("right", true)}>
                        <ArrowBack style={{ color: '#455a64' }} />
                    </IconButton>
                    <Typography variant="h5" style={{ color: "#ffffff" }}>
                        {props.pageName}
                    </Typography>
                    <MobilRightMenuSlider 
                        anchor="right"
                        open={state.right}
                        onClose={toogleSlider("right", false)}
                        >
                        {sideList("right")}
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;