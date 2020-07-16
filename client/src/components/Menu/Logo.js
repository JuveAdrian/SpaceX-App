import React from 'react';

import {Link} from 'react-router-dom';

import LogoImg from '../../public/spaceX-logo.png';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <Link to="/">
                    <h1>SpaceX App</h1>
                </Link>
            </div>
        );
    }
}

export default Logo;