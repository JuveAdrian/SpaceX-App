import React from 'react';

import Menu from '../components/Menu';
import ContentData from '../components/ContentContainer/ContentData';

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
                <Menu />
                <ContentData state={{ pageName: this.state.pageName, launches: this.state.launches }} />
            </div>
            
        )
    }
}

export default Launches;