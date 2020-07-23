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
                        <div className="rocket-container">
                            <h1>{el.name}</h1>
                            <img src={el.flickr_images[0]} />
                        </div>
                        
                    ))}
                </div>
            </main>
        )
    }
}

export default ContentDataRockets;