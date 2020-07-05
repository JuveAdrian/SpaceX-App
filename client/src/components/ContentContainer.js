import React from 'react';

class ContentContainer extends React.Component {
    state = {
        launches: []
    }

    componentDidMount() {
        fetch('https://api.spacexdata.com/v4/launches')
            .then(res => res.json())
            .then(json => this.setState({launches : json}))
    }

    render () {
        return (
            <div>
                    {this.state.launches.map(el => (
                       
                <div class="launcheElement">
                    <div class="launcheElement-left">
                        <h1>{el.name}</h1>
                        <span>{el.date_utc}</span>
                        <p>{el.details}</p>
                    </div>
                    <div class="launcheElement-right">
                        <img src={el.links.patch.small} />
                    </div>
                </div>
                ))}
            </div>
            
        )
    }
}

export default ContentContainer;