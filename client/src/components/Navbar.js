import React from 'react';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typografy,
    Box,
    Typography
} from "@material-ui/core";
import {
   ArrowBack,
   AssignmentInd,
   Home,
   Apps,
   ContactMail 
} from "@material-ui/icons";

const Navbar = () => {
    return (
        <Box component="nav">
            <AppBar style={{background: '#222'}}>
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
    )
}

export default Navbar;