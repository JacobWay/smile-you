import Bootstrap from "bootstrap";
import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider, connect} from "react-redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import {navBarR} from "../reducers/navBarR.js";
import {NavBar} from "../components/NavBar.js";

const mapStateToProps = (state) => {
    const {alarmsObj} = state;
    const name = "Jacob";
    return {
        alarmsObj,
        name
    }
}

const NavBar_ = connect(mapStateToProps)(NavBar);

const loggerMiddleware = createLogger();
const store = createStore(
    navBarR,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

class NavBarWrapper extends Component{
    render(){
        console.log("rendering in s/navBar.js...");
        return(
            <Provider store={store}>
                <NavBar_ />
            </Provider>
        );
    }
}

const mountNode = document.getElementById("app");
render(<NavBarWrapper />, mountNode);
