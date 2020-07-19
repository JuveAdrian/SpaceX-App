import React from 'react';

import {Link} from 'react-router-dom';

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