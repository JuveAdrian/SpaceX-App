import React from 'react';

import Menu from '../components/Menu';

class Rockets extends React.Component {
    state = {
        rockets: [],
        pageName: 'SpaceX Rockets'
    }

    componentDidMount() {
        fetch('https://api.spacexdata.com/v4/rockets')
            .then(res => res.json())
            .then(json => this.setState({rockets : json}));
    }
    
    render () {
        return (
            <div>
                <Menu />
                <h1>SpaceX Rockets</h1>
            </div>
        )
    }
}

export default Rockets;