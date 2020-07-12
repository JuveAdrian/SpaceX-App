import React from 'react';

import LogoImg from '../../public/spaceX-logo.png';

class Logo extends React.Component {
    render() {
        return (
            <div className="logoContainer">
                <img src={LogoImg} alt="logo" />
            </div>
           
        );
    }
}

export default Logo;