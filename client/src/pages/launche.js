import React from 'react';
import Async from 'react-async';

import Menu from '../components/Menu';


class Launche extends React.Component {
        constructor(props) {
            super();
            this.state = {
                id: props.match.params.id,
                data: [],
                hasError: false,
                loading: false
            }
        }

        componentDidMount() {
            this.setState({loading: true});
            fetch(`https://api.spacexdata.com/v4/launches/${this.state.id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({...this.state, data: json })
                this.setLoading({ loading: false})
            })
            .catch(err => {
                this.setState({loading: false})
                this.setState({ hasError: true })            
            })
        }
        // componentDidMount() {
        //     this.setState({loading: true})
        //     console.log(this.state.id)
        //     fetch(`https://api.spacexdata.com/v4/launches/${this.state.id}`)
        //         .then( () => {
        //             this.setState({ loading: false})
        //             console.log(true)
        //         })
        //         .then(res => res.json())
        //         .then(json => this.setState({ data : json }))
        //         .then((json)=> console.log('fetched'))
        //         .catch(err => {
        //             this.setState({loading: false})
        //             this.setState({ hasError: true })
        //     })
        // }
        
    

    render () {
        console.log(this.state.data)
        return (
            <>
                <Menu />
                { this.state.loading ? <h1>loading...</h1> : this.state.hasError ? <div>Error occured fetching data</div> : <h1>{ this.state.data.map(el => el.name)}</h1> }

                {/* { this.state.loading ? <div>loading...</div> : this.state.hasError ? <div>Error occured fetching data</div> : console.log(this.state.data) } */}
            </>
        )
    }
}

export default Launche;