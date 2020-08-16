import React from 'react';

import Navbar from '../components/Navbar';
import ContentHeader from '../components/ContentContainer/ContentHeader';
import Footer from '../components/Footer';

class Rocket extends React.Component {
    render () {
        return (
            <div>
                <Navbar />
                <main>
                    <ContentHeader state={{ pageName: this.props.location.state.name }}/>
                    <div className="rockets-list">
                        <img src={this.props.location.state.photos[0]} alt={this.props.location.state.name} />
                        <ul>
                            <li>Name: {this.props.location.state.name}</li>
                            <li>Description: {this.props.location.state.description}</li>
                            <li>Height: {this.props.location.state.height.meters}m</li>
                            <li>First Flight: {this.props.location.state.firstFlight}</li>
                            <li>Mass: {this.props.location.state.mass}kg</li>
                        </ul>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Rocket;