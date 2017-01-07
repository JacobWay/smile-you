import React, {Component} from "react";
import {render} from "react-dom";
import {Bootstrap} from "bootstrap";

import {BoxList} from "../components/BoxList.js";
import {StatusBar} from "../components/StatusBar.js";
import {SearchBar} from "../components/SearchFrontDesk.js";
import {Breadcrumbs} from "../components/Breadcrumbs.js";
import {Messages} from "../components/Messages.js";
import {UserOperation} from "../components/UserOperation.js";

require("../scss/base.scss");
require("../scss/frontDesk.scss");
require('font-awesome/css/font-awesome.css');

const breadcrumbs = [
    {'uri':'#', 'name':"收银"}, 
    {'uri':'', 'name':"首页"}
];

const MessageNum = 3;
const userName = "0001";

class FrontDesk extends Component{
    render(){
        return(
            <div class="ca-wrap">
                <SearchBar />
                <StatusBar />
                <BoxList />
            </div>
        );
    }
}

let mountNode = document.getElementById("ktvBox");
render(<UserOperation 
            name={userName}
        />, mountNode);

