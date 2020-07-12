import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../components/Menu';
import ContentHeader from '../components/ContentContainer/ContentHeader';

class Launches extends React.Component {
    state = {
        launches: [],
        pageName: 'SpaceX Launches'
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
                    <ContentHeader state={{pageName: this.state.pageName}} />
                    {this.state.launches.map(el => (  
                        <div className="launcheElement" key="el.id">
                            <div className="launcheElement-left">
                                <h1>{el.name}</h1>
                                <img src={el.links.patch.small} alt={el.name} />
                                <Link to={{ 
                                    pathname: `/launche/${el.id}`, 
                                    state: { 
                                        name: el.name,
                                        img: el.links.patch.small,
                                        gallery: el.links.flickr.original }
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