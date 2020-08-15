import React from 'react';

import Menu from '../components/Menu';
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