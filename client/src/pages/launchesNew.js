import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

import Cards from '../components/Cards';


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
        backgroundColor: 'green'
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
                <Grid item xs={12} md={10} className={classes.main} container>
                    <Cards />
                </Grid>
            </Grid>
        )
    }

export default LaunchesNew;