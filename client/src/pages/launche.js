import React from 'react';
import moment from 'moment';

class Launche extends React.Component {
    state = {
        launchpadId: this.props.location.state.launchpad,
        rocketId: this.props.location.state.rocket,
        launchpad: '',
        rocket: '',
        status: '',
        color: '',
    }

    missionStatus() {
        if(this.props.location.state.success) {
            this.setState({status : 'Success'})
        } else {
            this.setState({status : 'Failed', color: '#FF3232'})
        }
    }

    componentDidMount() {
        
        this.missionStatus();

        fetch(`https://api.spacexdata.com/v4/launchpads/${this.state.launchpadId}`)
            .then(res => res.json())
            .then(json => this.setState({launchpad : json.locality}))

        fetch(`https://api.spacexdata.com/v4/rockets/${this.state.rocketId}`)
            .then(res => res.json())
            .then(json => this.setState({rocket : json.name}))  
    }

    render() {
        return (
            <div>
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
                                    <li><span>Launch Date:</span> {moment(this.props.location.state.date).format('MMMM D, YYYY')}</li>
                                    <li><span>Launch site:</span> {this.state.launchpad}</li>
                                    <li><span>Rocket:</span> {this.state.rocket}</li>
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