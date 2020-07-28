import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../components/Menu';
import ContentHeader from '../components/ContentContainer/ContentHeader';

class Crew extends React.Component {
    state = {
        crew: [],
        pageName: 'SpaceX Crew'
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
                <main>
                    <div className="crewContainer">
                    <ContentHeader state={{ pageName: this.state.pageName }} />
                        <div className="crewMemberBox">
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
                                    <img src={el.image} alt={el.name} />
                                </Link>
                            </div>
                        ))}
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Crew;