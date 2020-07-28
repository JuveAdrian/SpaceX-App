import React from 'react';

class Rocket extends React.Component {
    render () {
        return (
            <div>
                <h1>{ this.props.location.state.name }</h1>
            </div>
        )
    }
}

export default Rocket;