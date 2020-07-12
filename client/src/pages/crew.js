import React from 'react';
import { Link } from 'react-router-dom';

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
                            <Link to={{ 
                                pathname: `/member/${el.id}`,
                                state: {
                                    wikipedia: el.wikipedia,
                                    agency: el.agency,
                                    status: el.status,
                                    image: el.image,
                                    name: el.name
                                } 
                            }} >
                                <h1>{ el.name }</h1>
                            </Link>
                            <img src={el.image} alt={el.name} />
                        </div>
                        
                    ))}
                </div>
                
                
            </div>
        )
    }
}

export default Crew;