import React from 'react';

import Photo from '../public/photoSpaceX.jpg';

class ContentContainer extends React.Component {
    state = {
        launches: []
    }

    componentDidMount() {
        fetch('https://api.spacexdata.com/v4/launches')
            .then(res => res.json())
            .then(json => this.setState({launches : json}));
    }

    render () {
        return (
            <img src={Photo} alt="main" /> 
        )
    }
}

export default ContentContainer;