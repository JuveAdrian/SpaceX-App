import React from 'react';
import { Link } from 'react-router-dom';
 
class Nav extends React.Component {
    render () {
        return (
                    <ul>
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/launches">Launches</Link></li>
                        <li><Link to="/rockets">Rockets</Link></li>
                        <li><Link to="/crew">Crew</Link></li>
                    </ul>
        );
    }
}

export default Nav;