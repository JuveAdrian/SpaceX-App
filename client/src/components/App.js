import React, { Component } from 'react';

import Menu from './Menu';
import ContentContainer from './ContentContainer';

class App extends React.Component {
    render () {
        return (
            <div>
                <Menu />
                <ContentContainer />
            </div>
            
        )
    }
}

export default App; 