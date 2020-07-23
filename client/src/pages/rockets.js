import React from 'react';

import Menu from '../components/Menu';
import ContentDataRockets from '../components/ContentContainer/ContentDataRockets';

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
                <ContentDataRockets state={{ pageName: this.state.pageName, rockets: this.state.rockets }} />
            </div>
        )
    }
}

export default Rockets;