import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

//Pages
import HomePage from '../pages/index';

class App extends Component {
    render () {
        return (
            <Router>
                <Route path="/" component={HomePage} />
            </Router>
        )
    }
}

export default App; 