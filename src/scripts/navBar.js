import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {navBarR} from "../reducers/navBarR.js";
import {Provider, connect} from "react-redux";
import {NavBar} from "../components/NavBar.js";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

const mapStateToProps = (state) => {
    const {num, alarmsObj} = state;
    const name = "Jacob";
    return {
        num,
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
