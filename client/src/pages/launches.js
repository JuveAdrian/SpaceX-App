import React from 'react';

import ContentData from '../components/ContentContainer/ContentData';
import Navbar from '../components/Navbar';

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
        return (
            <div>
                <Navbar />
                <ContentData state={{ pageName: this.state.pageName, launches: this.state.launches }} />
            </div>
            
        )
    }
}

export default Launches;