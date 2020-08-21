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
        return (
            <div>
                <Navbar pageName={this.props.location.state.name} />
                    <main >
                        <Grid container xs={12}>
                            <Grid item xs={11} sm={10} md={8} spacing={12}>
                                <Card style={{ margin: '30px 0', backgroundColor: '#455a64' }}>
                                    <CardHeader title={this.props.location.state.name} style={{ color: '#fff', textAlign: 'center' }} />
                                    <Divider />
                                    <Grid item container xs={12} style={{ backgroundColor: '#455a64' }}>
                                        <Grid item xs={12} sm={6} style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <img src={this.props.location.state.img} alt={'Launch Patch'} style={{ height: '300px', padding: '20px 0' }} />
                                        </Grid>
                                        <Grid item xs={12} sm={6} style={{ padding: '0 15px', color: '#eee', padding: '20px 0' }}>
                                            { this.props.location.state.success === true ? <MuiAlert variant="filled" color="success" severity="success" style={{ margin: '20px' }}>Success</MuiAlert> : <MuiAlert variant="filled" color="error" severity="error" style={{ marginRight: '20px' }}>Failed</MuiAlert> }
                                            <h3 style={{ lineHeight: '2em', color: '#bbb', padding: '0 20px', paddingTop: '20px' }}>Launch Description</h3>
                                            <p style={{ textAlign: 'justify', padding: '0 20px' }}>{this.props.location.state.details}</p>
                                            <Divider style={{ marginTop: '15px' }} />
                                            <h3 style={{ lineHeight: '2em', color: '#bbb', padding: '0 20px' }}>Launch Date:</h3>
                                            <p style={{ padding: '0 20px' }}>{moment(this.props.location.state.date).format('MMMM D, YYYY')}</p>
                                            <Divider style={{ marginTop: '15px', padding: '0 20px' }} />
                                            <h3 style={{ lineHeight: '2em', color: '#bbb', padding: '0 20px' }}>Launch site:</h3>
                                            <p style={{ padding: '0 20px' }}> {this.state.launchpad}</p>
                                            <Divider style={{ marginTop: '15px', padding: '0 20px' }} />
                                            <h3 style={{ lineHeight: '2em', color: '#bbb', padding: '0 20px' }}>Rocket:</h3>
                                            <p style={{ padding: '0 20px' }}>{this.state.rocket}</p>
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
                <Footer />
            </div>
        )
    }
}

export default withStyles(useStyles)(Launche);