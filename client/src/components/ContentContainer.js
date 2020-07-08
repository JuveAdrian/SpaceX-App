import React from 'react';

class ContentContainer extends React.Component {
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
            <div className="element-container">
                {this.state.launches.map(el => (  
                    <div className="launcheElement">
                        <div className="launcheElement-left">
                            <h1>{el.name}</h1>
                            <span>{el.date_utc}</span>
                            <p>{el.details}</p>
                            <img src={el.links.patch.small} alt={el.name} />
                            <button>Read More</button>
                        </div>  
                    </div>
                ))}
            </div>
            
        )
    }
}

export default ContentContainer;