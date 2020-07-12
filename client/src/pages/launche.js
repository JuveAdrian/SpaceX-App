import React from 'react';
import Async from 'react-async';

import Menu from '../components/Menu';

class Launche extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="launcheContainer">
                    <p>{this.props.location.state.name}</p>
                    <img src={this.props.location.state.img}></img>
                    {this.props.location.state.gallery.map( img => (
                        <img src={img} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Launche;