import React, {Component} from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {navBarR} from "../reducers/navBarR.js";
import {Provider} from "react-redux";
import {navBar} from "../components/NavBar.js";

const store = createStore(navBarR);

class navBarWrapper extends Component{
    render(){
        return(
            <Provider store={store}>
                <navBar />
            </Provider>
        );
    }
}

const mountNode = document.getElementById("app");
render(<navBarWrapper />, mountNode);
