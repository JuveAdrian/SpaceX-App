import React from 'react';
import Async from 'react-async';

import Menu from '../components/Menu';

const loadPosts = () => 
    fetch('https://api.spacexdata.com/v4/launches/5eb87cdaffd86e000604b32b')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

const Launche = () => (
    <Async promiseFn={loadPosts}>
        {({ data, error, isLoading }) => {
            if (isLoading) return <div>Fetching data... Please Wait</div>

            if (error) return <div>Something went wrong: ${error.message}</div>

            if (data){
                const responseData = (data) => {
                    return(
                        <div>
                            <p>{data.name}</p>
                        </div>
                    )
                }
            return(
                <div>
                    {responseData}
                </div>
            )    
            }
            return null
        }}
    </Async>
)

export default Launche;