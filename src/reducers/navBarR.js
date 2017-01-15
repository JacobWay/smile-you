import {GET_ALARMS, RECEIVE_ALARMS} from "../actions/navBarA.js";

const navBarR = (state, action) => {
    switch (action.type){
        case RECEIVE_ALARMS:
            return action.data;
        default:
            return state;
    }
}

export {navBarR};
