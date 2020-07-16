import React from 'react';

import Logo from './Menu/Logo';
import Nav from './Menu/Nav';
import Search from './Menu/Search';
import Burger from './Menu/Burger';

class Menu extends React.Component {
    render () {
        return (
            <nav>
                <Burger />
                <Logo />
                <Nav />
                <Search />
            </nav>
        );
    }
}

export default Menu;