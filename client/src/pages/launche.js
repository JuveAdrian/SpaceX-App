import React from 'react';

import Menu from '../components/Menu';

class Launche extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <main>
                    <div className="data-container-header">
                        <h1>{this.props.location.state.name}</h1>
                    </div>
                    <div className="single-item-container">
                        <div className="success">{this.props.location.state.success}</div>

                        <div className="describe-group">
                            <div className="image">
                                <img src={this.props.location.state.img} alt="" />
                            </div>
                            <div className="describe">
                                <h1>{this.props.location.state.name}</h1>
                                <p>{this.props.location.state.details}</p>
                            </div>
                            <div className="details">
                                <ul>
                                    <li><span>Launch Date:</span> {this.props.location.state.date}</li>
                                    <li><span>Launch site:</span> {this.props.location.state.launchpad}</li>
                                    <li><span>Rocket:</span> {this.props.location.state.rocket}</li>
                                </ul>
                            </div>
                        </div>
                        

                        <div className="gallery">
                            <h1>MISSION IMAGES</h1>
                            {this.props.location.state.gallery.map( img => (
                                <img className="cropped" src={img} alt={img} />
                            ))}
                        </div>
                    </div>   
                </main>
            </div>
        )
    }
}

export default Launche;