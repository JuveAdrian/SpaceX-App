import React from 'react';

import { Link } from 'react-router-dom';

import ContentHeader from '../ContentContainer/ContentHeader';

class ContentData extends React.Component {
    render () {
        return (
            <main>
                <ContentHeader state={{ pageName: this.props.state.pageName }} />
                {this.props.state.launches.map(el => (
                <div className="item-container" key="el.id">
                    <div className="image">
                    <Link to={{ 
                            pathname: `/launche/${el.id}`, 
                            state: { 
                                name: el.name,
                                img: el.links.patch.small,
                                gallery: el.links.flickr.original,
                                success: el.success,
                                details: el.details,
                                date: el.date_utc,
                                launchpad: el.launchpad,
                                rocket: el.rocket }
                        }}>
                            <img src={el.links.patch.small} alt="" />
                        </Link>
                    </div>
                    <div className="describe">
                        <Link to={{ 
                                pathname: `/launche/${el.id}`, 
                                state: { 
                                    name: el.name,
                                    img: el.links.patch.small,
                                    gallery: el.links.flickr.original,
                                    success: el.success,
                                    details: el.details,
                                    date: el.date_utc,
                                    launchpad: el.launchpad,
                                    rocket: el.rocket }
                            }}><h1 className="name">{el.name}</h1>
                        </Link>
                        <Link to={{ 
                            pathname: `/launche/${el.id}`, 
                            state: { 
                                name: el.name,
                                img: el.links.patch.small,
                                gallery: el.links.flickr.original,
                                success: el.success,
                                details: el.details,
                                date: el.date_utc,
                                launchpad: el.launchpad,
                                rocket: el.rocket }
                        }}>
                            <button>Read More</button>
                        </Link>
                        <span>{el.date}</span>
                    </div>
                </div>
                ))}
            </main>
        )
    }
}

export default ContentData;