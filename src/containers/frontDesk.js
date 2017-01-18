import React, {Component} from "react";
import {render} from "react-dom";
import {connect} from "react-redux";

import {BoxList} from "../components/BoxList.js";
import {NavBar} from "../components/NavBar.js";
import {SideBar} from "../components/SideBar.js";

import {navBarR} from "../reducers/navBarR.js";
import {sideBarR} from "../reducers/sideBarR.js";
import {boxListR} from "../reducers/boxListR.js";

import {fetchAlarmsA} from "../actions/navBarA.js";
import {fetchSideBarA} from "../actions/sideBarA.js";


const breadcrumbs = [
    {'uri':'#', 'name':"收银"}, 
    {'uri':'', 'name':"首页"}
];

const userName = "Jacob";

function SideBarWrapper(props){
    const {menuList} = props;
    return(
        <div class="ep">
            <nav class="bjr">
                <div class="bio">
                   <SideBar 
                       menuList={menuList} 
                   />
                </div>
            </nav>
        </div>
    );
}

class Main extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        console.log("componentDidMount of Main of c/frontDesk.js...");
        const {dispatch} = this.props;
        dispatch(fetchAlarmsA());
        dispatch(fetchSideBarA());
    }

    render(){
        console.log("rendering in Main of c/frontDesk.js...");
        console.log("rendering in Main of c/frontDesk.js of props...", this.props);
        const {alarmsObj, menuList} = this.props;
        return(
            <div>
                <NavBar
                    name={userName}
                    alarmsObj={alarmsObj}
                />
                <SideBarWrapper 
                   menuList={menuList} 
               />
               {this.props.children}
            </div>
        );
    }
}

function BoxWrapper(props){
    const {boxList, dispatch} = props;
    return(
        <div class="ev">
            <BoxList 
                boxList={boxList}
                dispatch={dispatch}
            />
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

// map state to props
const mapStateToPropsMain = (state) => {
    console.log("mapStateToPropsMain of state in c/frontDesk.js...", state);
    const {navBarR, sideBarR} = state;
    const {alarmsObj} = navBarR;
    const {menuList} = sideBarR;
    const name = userName;

    return {
        alarmsObj,
        menuList,
        name
    };
};

const mapStateToPropsBox = (state) => {
    console.log("mapStateToPropsBox of state in c/frontDesk.js...", state);
    const {boxListR} = state;
    const {boxList} = boxListR;

    return {
        boxList
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps in c/frontDesk.js...");
    return {dispatch};
};

const Main_ = connect(
    mapStateToPropsMain,
    mapDispatchToProps)(Main);
const BoxWrapper_ = connect(
    mapStateToPropsBox,
    mapDispatchToProps)(BoxWrapper);

export {Main, BoxWrapper, Main_, BoxWrapper_};
