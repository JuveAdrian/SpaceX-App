import React from 'react';

import Menu from '../components/Menu';

class Launche extends React.Component {
        state = {
            id: this.props.match.params.id,
            launche: []
        }
    
    
        useEffect() {
            fetch(`https://api.spacexdata.com/v4/launches/${this.state.id}`)
                .then(res => this.setState({ launche: res.data }));
        }
   

    render () {
        console.log(this.state.launche);
        return (
            <div>
                 <Menu />
                 <h1>{this.state.launche.name}</h1>
            </div>
        )
    }
}

export default Launche;