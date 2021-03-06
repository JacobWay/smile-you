import React, {Component} from "react";
import _ from "lodash";
import axios from "axios";
import {fetchAlarmsA} from "../actions/navBarA.js";


class NavBar extends Component{
    constructor(props){
        super(props);
        this.mobileMenuId = _.uniqueId("mobileMenu_");
    }


    componentDidMount = () => {
        console.log("componentDidMount in c/NavBar.js...");
        console.log("componentDidMount in c/NavBar.js of props...", this.props);
    }

    toggleMenu = (e) => {
        const element = document.getElementById(this.mobileMenuId);
        let display = element.style.display;
        display = display === "block" ? "none" : "block"
        element.style.display = display;
        
    }

    render(){
        console.log("rendering in c/NavBar.js...");
        const {alarmsObj, name} = this.props;
        const {num, alarms} = alarmsObj;
        const element = alarms.map( (item, i) => {
            return <li key={_.uniqueId("alarm_")}><a href="#">{item}</a></li>
        } );
        return(
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target={this.mobileMenuId} aria-expanded="false" onClick={this.toggleMenu}>
                            <span class="sr-only">Toggle Navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">笑掌柜系统</a>
                    </div>

                    <div class="collapse navbar-collapse" id={this.mobileMenuId}>
                        <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle alarms" data-toggle="dropdown"
                                    role="button" aria-haspopup="true" aria-expanded="false">
                                    <span class="fa fa-envelope"></span>
                                    {" "}
                                    消息
                                    {" "}
                                    <span class="badge">{num}</span>
                                </a>
                                <ul class="dropdown-menu">
                                    {element}
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                                    role="button" aria-haspopup="true" aria-expanded="false">
                                    <span class="fa fa-user"></span>
                                    {" "}用户{" "}{name}
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">收银交接班</a></li>
                                    <li><a href="#">修改密码</a></li>
                                    <li><a href="#">退出</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export {NavBar}
