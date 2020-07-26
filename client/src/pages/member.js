import React from 'react';

import Menu from '../components/Menu';

class Member extends React.Component {
    render () {
        return (
            <div>
                <Menu />
                <main>
                    <div className="data-container-header">
                        <h1>{this.props.location.state.name}</h1>
                    </div>
                        <div className="crewSingleMember">
                            <div className="photo">
                                <img src={this.props.location.state.image} alt={this.props.location.state.name} />
                            </div>
                            <div className="memberBio">
                                <h1>{this.props.location.state.name}</h1>
                                <p></p>
                                <ul>
                                    <li><span>Agency: </span>{this.props.location.state.agency}</li>
                                    <li><span>Status: </span>{this.props.location.state.status}</li>
                                </ul>    
                            </div>
                        </div>
                
                </main>
            </div>
        )
    }
}

export default Member;