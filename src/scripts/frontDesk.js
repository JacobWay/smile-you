import React, {Component} from "react";
import {render} from "react-dom";
import {BoxList} from "../components/BoxList.js";
import {StatusBar} from "../components/StatusBar.js";
import {SearchBar} from "../components/SearchFrontDesk.js";
require("../scss/base.scss");
require("../scss/frontDesk.scss");

class FrontDesk extends Component{
    render(){
        return(
            <div>
                <SearchBar />
                <StatusBar />
                <BoxList />
            </div>
        );
    }
}

let mountNode = document.getElementById("ktvBox");
render(<FrontDesk />, mountNode);

