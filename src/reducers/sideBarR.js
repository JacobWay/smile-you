import {RECEIVE_SIDEBAR} from "../actions/sideBarA.js";

const sideBarR = (state={
    menuList: [{
        name: "",
        subMenu: []
    }]
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

export {sideBarR};


