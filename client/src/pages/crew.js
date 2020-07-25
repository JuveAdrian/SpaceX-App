import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../components/Menu';
import ContentHeader from '../components/ContentContainer/ContentHeader';

class Crew extends React.Component {
    state = {
        crew: [],
        pageName: 'SpaceX Crew',
        robertDesc: 'Robert Louis "Bob" Behnken (/ˈbɛnkən/[1]; born July 28, 1970 in St. Ann, Missouri) is a NASA astronaut, engineer, and former Chief of the Astronaut Office. Behnken holds a Ph.D in mechanical engineering and the rank of colonel in the U.S. Air Force, where he served before joining NASA in 2000. He flew aboard Space Shuttle missions STS-123 (2008) and STS-130 (2010) as a mission specialist, accumulating over 708 hours in space, including 37 hours of spacewalk time.[2] He is married to fellow astronaut K. Megan McArthur.[3] Following retirement of the Space Shuttle, Behnken was Chief of the Astronaut Office from 2012 to 2015. Assigned to the SpaceX Dragon Capsule in 2018 as part of NASA\'s Commercial Crew Program, Behnken launched aboard the spacecraft\'s first crewed mission with fellow astronaut Doug Hurley on May 30, 2020. The mission, Crew Dragon Demo-2, took Behnken and Hurley to the International Space Station (ISS), where they docked and will stay for several weeks. Behnken is scheduled to perform at least two spacewalks during this stay at the ISS.[4]',
        douglasDesc: 'Douglas Gerald Hurley (born October 21, 1966) is an American engineer, former Marine Corps pilot and current NASA astronaut. He piloted space shuttle missions STS-127 (July 2009)[2] and STS-135 (July 2011), the final flight of the space shuttle program. He launched into space for the third time as commander of Crew Dragon Demo-2, the first crewed spaceflight from American soil since STS-135. He was also the first Marine to fly the F/A-18 E/F Super Hornet. His call sign is "Chunks", and he was sometimes referred to by this name on the communication loops. Hurley received his commission as a second lieutenant in the United States Marine Corps from the Naval Reserve Officer Training Corps at Tulane University, New Orleans, Louisiana, in 1988. After graduation, he attended The Basic School at Marine Corps Base Quantico, Virginia and later the Infantry Officers Course. Following aviation indoctrination at Naval Air Station Pensacola, Florida, he entered flight training in Texas in 1989; he was a distinguished graduate of the U.S. Navy Pilot Training program and was designated a Naval Aviator in August 1991.'
    }

    componentDidMount() {
        fetch('https://api.spacexdata.com/v4/crew')
            .then(res => res.json())
            .then(json => this.setState({crew : json}));
    }

    render () {
        return (
            <div>
                <Menu />
                <div className="crewContainer">
                <ContentHeader state={{ pageName: this.state.pageName }} />
                    <div className="crewMemberBox">
                    {this.state.crew.map( el => (
                        <div className="crewMember">
                            <Link to={{ 
                                pathname: `/member/${el.id}`,
                                state: {
                                    wikipedia: el.wikipedia,
                                    agency: el.agency,
                                    status: el.status,
                                    image: el.image,
                                    name: el.name
                                } 
                            }} >
                                <h1>{ el.name }</h1>
                            </Link>
                            <Link to={{ 
                                pathname: `/member/${el.id}`,
                                state: {
                                    wikipedia: el.wikipedia,
                                    agency: el.agency,
                                    status: el.status,
                                    image: el.image,
                                    name: el.name
                                } 
                            }} >
                                <img src={el.image} alt={el.name} />
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Crew;