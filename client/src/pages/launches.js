import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../components/Menu';

class Launches extends React.Component {
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
            <div>
                <Menu />
                <div className="element-container">
                    <h1>SpaceX Launches</h1>
                    {this.state.launches.map(el => (  
                        <div className="launcheElement" key="el.id">
                            <div className="launcheElement-left">
                                <h1>{el.name}</h1>
                                <img src={el.links.patch.small} alt={el.name} />
                                <Link to={{ 
                                    pathname: `/launche/${el.id}`, 
                                    state: { 
                                        name: el.name,
                                        img: el.links.patch.small }
                                }}><button>Read More</button></Link>
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
            
            
        )
    }
}

export default Launches;