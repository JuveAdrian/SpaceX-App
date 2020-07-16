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
                <main>
                    <div className="data-container-header">
                        <h1>{this.state.pageName}</h1>
                    </div>
                    {this.state.launches.map(el => (
                    <div className="item-container" key="el.id">
                        <div className="image"><a href="#"><img src={el.links.patch.small} /></a></div>
                        <div className="describe">
                            <a href="#"><h1 className="name">{el.name}</h1></a>
                            <Link to={{ 
                                pathname: `/launche/${el.id}`, 
                                state: { 
                                    name: el.name,
                                    img: el.links.patch.small,
                                    gallery: el.links.flickr.original }
                            }}>
                                <button>Read More</button>
                            </Link>
                            <span>{el.date}</span>
                        </div>
                    </div>
                    ))}
                </main>
            </div>
            
        )
    }
}

export default Launches;