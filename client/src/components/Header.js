import React from 'react';
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from '../../src/nasa.png';

const Header = () => {
    return (
        <Box>
            <Avatar src={avatar} alt="avatar" />
        </Box>
    )
}

export default Header;