import React from "react";
import "./style.scss"

import {Router, Route, Link} from "react-router";
import createHistory from "history/lib/createHashHistory";


import App from "./App.jsx";
import Landing from "./Landing.jsx";


React.render((
    <Router history={createHistory({queryKey: false})}>
        <Route path="/" component={App}
               indexRoute={{component: Landing}}>
        </Route>
    </Router>
), document.getElementById("app"));
