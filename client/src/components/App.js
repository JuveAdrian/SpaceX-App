import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

//Pages
import HomePage from '../pages/index';
import Launches from '../pages/launches';
import Rockets from '../pages/rockets';
import Crew from '../pages/crew';
import Page404 from '../pages/404';

class App extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/launches" component={Launches} />
                    <Route exact path="/rockets" component={Rockets} />
                    <Route exact path="/crew" component={Crew} />
                    <Route exact path="/404" component={Page404} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        )
    }
}

export default App; 