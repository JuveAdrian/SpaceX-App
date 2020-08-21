import React from 'react';
import moment from 'moment';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Grid, makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { ThemeProvider } from '@material-ui/styles';
import { GridList, GridListTile, ListSubheader } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = theme => makeStyles({
    content1: {
        marginTop: '150px'
    }
});

class Launche extends React.Component {
    
    state = {
        launchpadId: this.props.location.state.launchpad,
        rocketId: this.props.location.state.rocket,
        launchpad: '',
        rocket: ''
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
                    <main >
                        <Grid container xs={12}>
                            <Grid item xs={11} sm={10} md={8} spacing={12}>
                                <Card style={{ margin: '30px 0', backgroundColor: '#455a64' }}>
                                    <CardHeader title={this.props.location.state.name} style={{ color: '#fff', textAlign: 'center' }} />
                                    <Divider />
                                    <Grid item container xs={12} style={{ backgroundColor: '#455a64' }}>
                                        <Grid item xs={6} style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <img src={this.props.location.state.img} alt={'Launch Patch'} style={{ height: '300px', padding: '20px 0' }} />
                                        </Grid>
                                        <Grid item xs={6} style={{ padding: '0 15px', color: '#eee', paddingBottom: '20px' }}>
                                            <MuiAlert severity="success">This is a success message!</MuiAlert>
                                            <h3 style={{ lineHeight: '2em', color: '#bbb' }}>Launch Description</h3>
                                            <p style={{ textAlign: 'justify' }}>{this.props.location.state.details}</p>
                                            <Divider style={{ marginTop: '15px' }} />
                                            <h3 style={{ lineHeight: '2em', color: '#bbb' }}>Launch Date:</h3>
                                            <p>{moment(this.props.location.state.date).format('MMMM D, YYYY')}</p>
                                            <Divider style={{ marginTop: '15px' }} />
                                            <h3 style={{ lineHeight: '2em', color: '#bbb' }}>Launch site:</h3>
                                            <p>{this.state.launchpad}</p>
                                            <Divider style={{ marginTop: '15px' }} />
                                            <h3 style={{ lineHeight: '2em', color: '#bbb' }}>Rocket:</h3>
                                            <p>{this.state.rocket}</p>
                                        </Grid>
                                    </Grid>

                                    <Divider />
                                    <GridList cellHeight={400} cols={3} spacing={0}>
                                        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                                            <ListSubheader component="div" style={{ color: '#fff', fontSize: '1.2em', textAlign: 'center' }}>Launche Gallery</ListSubheader>
                                        </GridListTile>
                                        {this.props.location.state.gallery.map((el) => (
                                            <GridListTile cols={el.cols || 1}>
                                                <img src={el} />
                                            </GridListTile>
                                        ))}
                                    </GridList>
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