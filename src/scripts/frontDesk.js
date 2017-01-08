import React, {Component} from "react";
import {render} from "react-dom";
import {Bootstrap} from "bootstrap";

import {BoxList} from "../components/BoxList.js";
import {StatusBar} from "../components/StatusBar.js";
import {SearchBar} from "../components/SearchFrontDesk.js";
import {Breadcrumbs} from "../components/Breadcrumbs.js";
import {Messages} from "../components/Messages.js";
import {UserOperation} from "../components/UserOperation.js";
import {NavBar} from "../components/NavBar.js";
import {SideBar} from "../components/SideBar.js";

require('font-awesome/css/font-awesome.css');
require("../scss/base.scss");
require("../scss/frontDesk.scss");
require("../scss/lightTheme.scss");


const breadcrumbs = [
    {'uri':'#', 'name':"收银"}, 
    {'uri':'', 'name':"首页"}
];

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

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            alarmsObj: {
                num: 0,
                alarms: []
            },
            menuList: [
                {
                    name: '',
                    subMenu: []
                }
            ]
        };
    }

    flowAlarmsData = (data) => {
        this.setState({
            alarmsObj: data
        });
    }

    setMenuData = (data) => {
        this.setState({
            menuList: data
        });
    }

    render(){
        return(
            <div>
                <NavBar
                    name={userName}
                    flowAlarmsData={this.flowAlarmsData}
                    alarmsObj={this.state.alarmsObj}
                />
               <SideBar 
                   menuList={this.state.menuList} 
                   setMenuData={this.setMenuData} 
               />
               <BoxList />
            </div>
        );
    }
}

let mountNode = document.getElementById("ktvBox");
render(<Main />, mountNode);

