import Bootstrap from "bootstrap";
import React, {Component} from "react";
import {render} from "react-dom";
import {Provider, connect} from "react-redux";
import {NavBar} from "../components/NavBar.js";
import {configureStore} from "../stores/navBarS.js";

const mapStateToProps = (state) => {
    const {alarmsObj} = state;
    const name = "Jacob";
    return {
        alarmsObj,
        name
    }
}

const NavBar_ = connect(mapStateToProps)(NavBar);
const store = configureStore();


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
