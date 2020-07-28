import React from 'react';

import Menu from '../components/Menu';
import ContentHeader from '../components/ContentContainer/ContentHeader';

class Rocket extends React.Component {
    render () {
        return (
            <div>
                <Menu />
                <main>
                    <ContentHeader state={{ pageName: this.props.location.state.name }}/>
                </main>
            </div>
        )
    }
}

export default Rocket;