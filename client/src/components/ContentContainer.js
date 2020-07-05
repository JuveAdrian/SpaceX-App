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
                <ul>
                    {this.state.launches.map(el => (
                        <li>
                            <h2>{el.name}</h2>
                            <img src={el.links.patch.small} alt="{el.links.patch.small}"></img>

                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ContentContainer;