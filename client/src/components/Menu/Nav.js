import React from 'react';
import { Link } from 'react-router-dom';
 
class Nav extends React.Component {
    render () {
        return (
            <ul className="nav-links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/launches">Launches</Link></li>
                <li><Link to="/rockets">Rockets</Link></li>
                <li><Link to="/crew">Crew</Link></li>
            </ul>
        );
    }
}

export default Nav;