import React, {Component} from "react";
import {render} from "react-dom";
import {Messages} from "./Messages.js";
import {UserOperation} from "./UserOperation.js";
import {uniqueId} from "lodash/uniqueId";
import axios from "axios";

// local json data
const alarmsDataUrl = "../../data/alarmsData.json"

class NavBar extends Component{
    constructor(props){
        super(props);
    }

    fetchAlarmsData = () => {
        axios.get(alarmsDataUrl)
        .then( (res) => {
            const data = res.data;
            this.props.flowAlarmsData(data);
        } )
        .catch( (err) => {
            console.log("error in fetchAlarmsData... ", err);
        } );
    }

    componentDidMount = () => {
        this.fetchAlarmsData();
    }

    render(){
        console.log("rending in NavBar...");
        const {alarmsObj, name} = this.props;
        const {num, alarms} = alarmsObj;
        const element = alarms.map( (item, i) => {
            return <li key={_.uniqueId("alarm_")}><a href="#">{item}</a></li>
        } );
        return(
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">笑掌柜系统</a>
                    </div>

                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                                role="button" aria-haspopup="true" aria-expanded="false">
                                <span class="fa fa-envelope"></span>
                                消息
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
                                用户{name}
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
            </nav>
        );
    }

}

export {NavBar}
