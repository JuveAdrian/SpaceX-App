import React from 'react';

import Navbar from '../components/Navbar';
import ContentContainer from '../components/ContentContainer';

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'Home'} />
                <ContentContainer />
            </div>
        )
    }
}

export default HomePage;