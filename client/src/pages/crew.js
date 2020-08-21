import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import ContentHeader from '../components/ContentContainer/ContentHeader';
import Footer from '../components/Footer';

import { Grid, Card, CardHeader } from '@material-ui/core';

class Crew extends React.Component {
    state = {
        crew: [],
        pageName: 'SpaceX Crew'
    }

    componentDidMount() {
        fetch('https://api.spacexdata.com/v4/crew')
            .then(res => res.json())
            .then(json => this.setState({crew : json}));
    }

    render () {
        return (
            <div>
                <Navbar pageName={'Crew'} />
                <main>
                    <Grid xs={12} container spacing={3}>
                    {this.state.crew.map( el => (
                        <Grid xs={11} sm={5} item style={{ margin: '20px 0' }}>
                            <Card style={{ backgroundColor: '#455a64' }}>
                                
                                <Link to={{ 
                                    pathname: `/member/${el.id}`,
                                    state: {
                                        wikipedia: el.wikipedia,
                                        agency: el.agency,
                                        status: el.status,
                                        image: el.image,
                                        name: el.name
                                    } 
                                }} >
                                    <CardHeader title={el.name} style={{ color: '#fff', textAlign: 'center' }} />
                                    <img src={el.image} alt={el.name} style={{ width: '100%' }} />
                                </Link>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>



                </main>
                <Footer />
            </div>
        )
    }
}

export default Crew;