import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

import Cards from '../components/Cards';
import Navbar from '../components/Navbar';


const useStyles = makeStyles({
    box: {
        justifyContent: 'center',
        backgroundColor: '#263238'
    },  
    content: {
        backgroundColor: 'red'
    },
    footer: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: '20px'
    },
    main: {
        marginTop: '80px'
    }
}) 

const LaunchesNew = ()  =>  {

        const classes = useStyles();
        return (
            <Grid container xs={12} className={classes.box} >
                <Navbar />
                <Grid item xs={12} md={10} className={classes.main} container>
                    <Cards />
                </Grid>
                <Grid item xs={12} className={classes.footer} container>
                    Adrian Grabkowski
                </Grid>
            </Grid>
        )
    }

export default LaunchesNew;