import React from 'react';

import Menu from '../components/Menu';

class Crew extends React.Component {
    state = {
        crew: []
    }

    componentDidMount() {
        fetch('https://api.spacexdata.com/v4/crew')
            .then(res => res.json())
            .then(json => this.setState({crew : json}));
    }

    render () {
        return (
            <div>
                <Menu />
               
                <div className="crewContainer">
                <h1>SpaceX Crew</h1>
                    {this.state.crew.map( el => (
                        <div className="crewMember">
                            <h1>{ el.name }</h1>
                            <img src={el.image} alt={el.name} />
                        </div>
                        
                    ))}
                </div>
                
                
            </div>
        )
    }
}

export default Crew;