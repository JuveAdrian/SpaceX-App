import React from 'react';
import { Link } from 'react-router-dom';
 
class Nav extends React.Component {
    render () {
        return (
            <div>
                <Link to="/">Home Page</Link>
                <Link to="/launches">Launches</Link>
                <Link to="/rockets">Rockets</Link>
                <Link to="/crew">Crew</Link>
            </div>
        );
    }
}

export default Nav;