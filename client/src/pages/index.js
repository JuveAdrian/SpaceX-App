import React from 'react';

import Menu from '../components/Menu';
import ContentContainer from '../components/ContentContainer';

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <Menu />
                <ContentContainer />
            </div>
        )
    }
}

export default HomePage;