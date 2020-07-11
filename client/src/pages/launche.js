import React from 'react';
import Async from 'react-async';

import Menu from '../components/Menu';

class Launche extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <p>{this.props.location.state.name}</p>
                <img src={this.props.location.state.img}></img>
            </div>
        )
    }
}

export default Launche;