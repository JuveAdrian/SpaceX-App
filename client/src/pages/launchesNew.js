import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const useStyles = makeStyles({
    box: {
        justifyContent: 'center',
        backgroundColor: '#263238'
    },  
    content: {
        backgroundColor: 'red'
    },
    main: {
        marginTop: '20px'
    }
}) 

const LaunchesNew = ()  =>  {

        const classes = useStyles();
        return (
            <div>
                <Navbar pageName={'Launches'} />
                <Grid container xs={12} className={classes.box} >
                    <Grid item xs={12} md={10} className={classes.main} container>
                        <Cards />
                    </Grid>
                    <Footer />
                </Grid>
            </div>
        )
    }

export default LaunchesNew;