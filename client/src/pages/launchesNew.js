import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    box: {
        justifyContent: 'center'
    },
    nav: {
        height: '80px'
    },
    logo: {
        backgroundColor: 'blue',
        spacing: '3'
    },
    main: {
        justifyContent: 'center',
        height: '1000px',
        backgroundColor: 'green',
    },
    content: {
        backgroundColor: 'red'
    }
}) 

const LaunchesNew = ()  =>  {

        const classes = useStyles();
        return (
            <Grid container xs={12} spacing={3} className={classes.box} >
                <Grid item xs={12} className={classes.nav} container >
                    <Grid item xs={3} className={classes.logo}>Logo</Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={3}>Search</Grid>
                </Grid>
                <Grid item xs={10} className={classes.main} container>
                    <Grid item xs={12} className={classes.content}>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

export default LaunchesNew;