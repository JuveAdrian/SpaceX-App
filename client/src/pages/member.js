import React from 'react';

import Menu from '../components/Menu';

class Member extends React.Component {
    render () {
        return (
            <div>
                <Menu />
                <div className="memberContainer">
                   
                    <img src={this.props.location.state.image} />
                    <h1>{this.props.location.state.name}</h1>
                    <p>Robert Louis "Bob" Behnken (/ˈbɛnkən/[1]; born July 28, 1970 in St. Ann, Missouri) is a NASA astronaut, engineer, and former Chief of the Astronaut Office. Behnken holds a Ph.D in mechanical engineering and the rank of colonel in the U.S. Air Force, where he served before joining NASA in 2000. He flew aboard Space Shuttle missions STS-123 (2008) and STS-130 (2010) as a mission specialist, accumulating over 708 hours in space, including 37 hours of spacewalk time.[2] He is married to fellow astronaut K. Megan McArthur.[3]<br />

                    Following retirement of the Space Shuttle, Behnken was Chief of the Astronaut Office from 2012 to 2015. Assigned to the SpaceX Dragon Capsule in 2018 as part of NASA's Commercial Crew Program, Behnken launched aboard the spacecraft's first crewed mission with fellow astronaut Doug Hurley on May 30, 2020. The mission, Crew Dragon Demo-2, took Behnken and Hurley to the International Space Station (ISS), where they docked and will stay for several weeks. Behnken is scheduled to perform at least two spacewalks during this stay at the ISS.[4]</p>
                    <h3>Agency: {this.props.location.state.agency}</h3>
                    <h3>Status: {this.props.location.state.status}</h3>
                </div>
            </div>
        )
    }
}

export default Member;