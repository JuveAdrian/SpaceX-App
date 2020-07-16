import React from 'react';

class ContentHeader extends React.Component {
    render () {
        return (
            <div className="data-container-header">
                <h1>{this.props.state.pageName}</h1>
            </div>
        )
    }
}

export default ContentHeader;