import {Bootstrap} from "bootstrap";
import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, hashHistory, IndexRoute} from "react-router";
import {Provider} from "react-redux";

import {configureStore} from "../stores/navBarS.js";
import {Main_, BoxWrapper_} from "../containers/frontDesk.js";

require('font-awesome/css/font-awesome.css');
require("../scss/base.scss");
require("../scss/frontDesk.scss");
require("../scss/lightTheme.scss");

const frontDeskNode = document.getElementById("frontDesk");
const store = configureStore();

// use react router
render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main_}>
                <IndexRoute component={BoxWrapper_} />
            </Route>
        </Router>
    </Provider>
), frontDeskNode);
