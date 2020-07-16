import React from 'react';

import Logo from './Menu/Logo';
import Nav from './Menu/Nav';
import Search from './Menu/Search';
import { Switch } from 'react-router-dom';

class Menu extends React.Component {
    render () {
        return (
            <nav>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <Logo />
                <Nav />
                <Search />
            </nav>
        );
    }
}

export default Menu;