import React from 'react';

import Photo from '../public/photoSpaceX.jpg';

class ContentContainer extends React.Component {
    render () {
        return (
            <img src={Photo} alt="main" /> 
        )
    }
}

export default ContentContainer;