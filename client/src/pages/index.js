import React from 'react';

import Navbar from '../components/Navbar';
import ContentContainer from '../components/ContentContainer';
import Footer from '../components/Footer';

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'Home'} />
                <ContentContainer />
                <Footer />
            </div>
        )
    }
}

export default HomePage;