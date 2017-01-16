import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, hashHistory, IndexRoute} from "react-router";
import {Bootstrap} from "bootstrap";

import {Provider} from "react-redux";

import {configureStore} from "../stores/navBarS.js";
import {BoxList} from "../components/BoxList.js";
import {StatusBar} from "../components/StatusBar.js";
import {SearchBar} from "../components/SearchFrontDesk.js";
import {Breadcrumbs} from "../components/Breadcrumbs.js";
import {Messages} from "../components/Messages.js";
import {UserOperation} from "../components/UserOperation.js";
import {NavBar} from "../components/NavBar.js";
import {SideBar} from "../components/SideBar.js";
import {Main_, BoxWrapper_} from "../containers/frontDesk.js";

require('font-awesome/css/font-awesome.css');
require("../scss/base.scss");
require("../scss/frontDesk.scss");
require("../scss/lightTheme.scss");

const store = configureStore();


const frontDeskNode = document.getElementById("frontDesk");

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
