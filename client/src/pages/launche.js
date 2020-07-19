import React from 'react';

import Menu from '../components/Menu';

class Launche extends React.Component {
    state = {
        id: this.props.location.state.launchpad,
        launchpad: [],
        status: '',
        color: ''
    }

    componentDidMount() {
        if(this.props.location.state.success) {
            this.setState({status : 'Success'})
        } else {
            this.setState({status : 'Failed', color: '#FF3232'})
        }

        console.log(this.props.location.state.launchpad);
        console.log(this.state.launchpad);
        fetch(`https://api.spacexdata.com/v4/launchpads/${this.state.id}`)
            .then(res => res.json())
            .then(json => this.setState({launchpad : json})).then(
                console.log(this.state.launchpad)
            )
    }

    com

    render() {
        return (
            <div>
                <Menu />
                <main>
                    <div className="data-container-header">
                        <h1>{this.props.location.state.name}</h1>
                    </div>
                    <div className="single-item-container">
                        <div className="success" style={{backgroundColor: this.state.color}}>{this.state.status}</div>

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
                                    <li><span>Launch site:</span></li>
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