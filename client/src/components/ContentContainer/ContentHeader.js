import React from 'react';

class ContentHeader extends React.Component {
    render () {
        return (
            <h1>{this.props.state.pageName}</h1>
        )
    }
}

export default ContentHeader;