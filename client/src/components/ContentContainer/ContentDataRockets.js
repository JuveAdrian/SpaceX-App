import React from 'react';

import { Link } from 'react-router-dom';

import ContentHeader from '../ContentContainer/ContentHeader';

class ContentDataRockets extends React.Component {
    render() {
        return (
            <main>
                <ContentHeader state={{ pageName: this.props.state.pageName }} />
                <div className="rockets-list">
                    {this.props.state.rockets.map(el => (
                        <Link to={{
                                pathname: `/rocket/${el.id}`,
                                state: {
                                    name: el.name,
                                    desc: el.description,
                                    firstFlight: el.first_flight,
                                    mass: el.mass.kg,
                                    height: el.height,
                                    wikiLink: el.wikipedia,
                                    photos: el.flickr_images
                                }
                        }}>
                             <div className="rocket-container">
                                <h1>{el.name}</h1>
                                <img src={el.flickr_images[0]} alt="" />
                            </div>
                        </Link>
                       
                        
                    ))}
                </div>
            </main>
        )
    }
}

export default ContentDataRockets;