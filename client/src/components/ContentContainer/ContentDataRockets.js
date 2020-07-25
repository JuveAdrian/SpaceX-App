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
                                pathname: `/rockets/${el.id}`
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