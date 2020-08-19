import React from 'react';
import moment from 'moment';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Grid, makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = theme => makeStyles({
    content: {
        marginTop: '150px'
    }
});

class Launche extends React.Component {
    
    state = {
        launchpadId: this.props.location.state.launchpad,
        rocketId: this.props.location.state.rocket
    }

    missionStatus() {
        if(this.props.location.state.success) {
            this.setState({status : 'Success'})
        } else {
            this.setState({status : 'Failed', color: '#FF3232'})
        }
    }

    componentDidMount() {
        this.missionStatus();

        fetch(`https://api.spacexdata.com/v4/launchpads/${this.state.launchpadId}`)
            .then(res => res.json())
            .then(json => this.setState({launchpad : json.locality}))

        fetch(`https://api.spacexdata.com/v4/rockets/${this.state.rocketId}`)
            .then(res => res.json())
            .then(json => this.setState({rocket : json.name}))  
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Navbar pageName={this.props.location.state.name} />
                <ThemeProvider >
                    <main className={classes.content}>
                        <Grid container xs={12}>
                            <Grid item xs={11} sm={10} md={8} spacing={12} >
                                <Card>
                                    <CardHeader title={this.props.location.state.name}></CardHeader>
                                </Card>
                            </Grid>
                        </Grid>
                    </main>
                </ThemeProvider>
                <Footer />
            </div>
        )
    }
}

export default withStyles(useStyles)(Launche);