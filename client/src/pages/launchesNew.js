import React, { useState, useEffect } from 'react';

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
    const API_URL = 'https://api.spacexdata.com/v4/launches/';
    const [data, setData] = useState([]);


    console.log('przed pobieraniem');

    useEffect(() => {
        console.log('pobieranie danych');
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch(API_URL);
        console.log(API_URL);
        const data = await response.json();
        setData(data.launches);
        console.log(data.launches);
    }

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