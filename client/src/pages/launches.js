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
                <div class="element-container">
                    {this.state.launches.map(el => (  
                        <div class="launcheElement">
                            <div class="launcheElement-left">
                                <h1>{el.name}</h1>
                                
                                <span>{el.date_utc}</span>
                                <p>{el.details}</p>
                                <img src={el.links.patch.small} alt={el.name} />
                                <Link to="/launche"><button>Read More</button></Link>
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
            
            
        )
    }
}

export default Launches;