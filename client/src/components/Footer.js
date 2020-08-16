import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        backgroundColor: 'rgb(34, 34, 34)',
        color: '#fff',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: '20px',
        padding: '14px 0'
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
    <Grid item xs={12} className={classes.footer} container>
        Adrian Grabkowski - SapceX App
    </Grid>
    )
    
    
}

export default Footer;