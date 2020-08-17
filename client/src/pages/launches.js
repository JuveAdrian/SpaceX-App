import React from 'react';

import ContentData from '../components/ContentContainer/ContentData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Grid, Box, makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => makeStyles({
    box: {
        justifyContent: 'center',
        backgroundColor: '#263238'
    },  
    content: {
        backgroundColor: 'red'
    },
    main: {
        marginTop: '50px'
    }
});

class Launches extends React.Component {
    state = {
        launches: [],
        pageName: 'SpaceX Launches'
    }

    componentDidMount() {
        fetch('https://api.spacexdata.com/v4/launches')
            .then(res => res.json())
            .then(json => this.setState({launches : json}));
    }

    render () {
        const { classes } = this.props;
        return (
            <Box>
                <Navbar pageName={'SpaceX Launches'} />
                <Grid container xs={12} className={classes.box} >
                    <Grid item xs={12} md={10} className={classes.main} container>
                        <ContentData state={{ pageName: this.state.pageName, launches: this.state.launches }} />
                    </Grid>
                    <Footer />
                </Grid>
            </Box>
            
        )
    }
}

export default withStyles(useStyles)(Launches);