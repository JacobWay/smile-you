import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, hashHistory, IndexRoute} from "react-router";
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

    setAlarmsData = (data) => {
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
        console.log("rendering in Main of frontDesk.js...");
        return(
            <div>
                <NavBar
                    name={userName}
                    setAlarmsData={this.setAlarmsData}
                    alarmsObj={this.state.alarmsObj}
                />
                <SideBarWrapper 
                   menuList={this.state.menuList} 
                   setMenuData={this.setMenuData} 
               />
               {this.props.children}
            </div>
        );
    }
}

function SideBarWrapper(props){
    return(
        <div class="ep">
            <nav class="bjr">
                <div class="bio">
                   <SideBar 
                       menuList={props.menuList} 
                       setMenuData={props.setMenuData} 
                   />
                </div>
            </nav>
        </div>
    );
}

function BoxWrapper(){
    return(
        <div class="ev">
            <BoxList />
        </div>
    );
}

class Test extends Component{
    render(){
        return(
            <h1>Hi, Test</h1>
        );
    }
}

const menuWrapperNode = document.getElementById("menuWrapper");
const ktvBoxNode = document.getElementById("ktvBox");
const frontDeskNode = document.getElementById("frontDesk");
//render(<Main />, frontDeskNode);
//render(<BoxList />, ktvBoxNode);

// use react router
render((
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={BoxWrapper} />
        </Route>
    </Router>
), frontDeskNode);
