import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//Pages
import HomePage from '../pages/index';
import Launches from '../pages/launches';
import Rockets from '../pages/rockets';
import Crew from '../pages/crew';
import Launche from '../pages/launche';
import Member from '../pages/member';
import Page404 from '../pages/404';
import About from '../pages/about';

class App extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/launches" component={Launches} />
                    <Route exact path="/rockets" component={Rockets} />
                    <Route exact path="/crew" component={Crew} />
                    <Route path="/launche/:id" component={Launche} />
                    <Route path="/member/:id" component={Member} />
                    <Route exact path="/404" component={Page404} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        )
    }
}

export default App; 