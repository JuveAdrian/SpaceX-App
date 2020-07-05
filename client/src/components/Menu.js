import React from 'react';

import Logo from './Menu/Logo';
import Nav from './Menu/Nav';

class Menu extends React.Component {
    render () {
        return (
            <div className="menu-container">
                <Logo />
                <Nav />
            </div>
        );
    }
}

export default Menu;