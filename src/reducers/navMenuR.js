import {GET_ALARMS, RECEIVE_ALARMS} from "../actions/navBarA.js";

const navBarR = (state={
    alarmsObj: {
        num: 1,
        alarms: ['?']
    }
}, action) => {
    const alarmsObj = action.alarmsOb;
    let newState;
    switch (action.type){
        case RECEIVE_ALARMS:
            newState = {
                ...state,
                alarmsObj
            }
            return newState;
        default:
            return state;
    }
}

const sideBarR = (state={
    menuList: {
        name: "",
        subMenu: []
    }
}, action) => {
    const menuList = action.menuList;
    let newState;
    switch (action.type){
        case RECEIVE_SIDEBAR:
            newState = {
                ...state,
                menuList
            }
            return newState;
        default:
            return state;
    }
}

export {navBarR, sideBarR};

