import React from 'react';

import Menu from '../components/Menu';

class Launche extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="launcheContainer">
                    <p>{this.props.location.state.name}</p>
                    <img src={this.props.location.state.img} alt={this.props.location.state.name} ></img>
                    {this.props.location.state.gallery.map( img => (
                        <img src={img} alt={img} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Launche;