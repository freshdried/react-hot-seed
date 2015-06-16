import React from "react";
import App from "./app.jsx";

import "./style.scss"

React.render(<App />, document.body);

import {Router, Route, Link} from "react-router";
import History from 'react-router/lib/HashHistory'

React.render((
    <Router history={History}>
        <Route path="/" component={App}>
        </Route>
    </Router>
), document.body)
