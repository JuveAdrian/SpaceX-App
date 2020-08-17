import React, { useState } from 'react';

import { Grid, makeStyles } from '@material-ui/core';

import Cards from '../Cards';
import Navbar from '../Navbar';
import Footer from '../Footer';

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
}); 


 const ContentLaunches = (props) => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    setData(props.state.launches)

    
    console.log(data);
    return (
        <div>
                <Navbar pageName={'Launches'} />
                <Grid container xs={12} className={classes.box} >
                    <Grid item xs={12} md={10} className={classes.main} container>
                        
                    </Grid>
                    <Footer />
                </Grid>
        </div>
    )
}

export default ContentLaunches;