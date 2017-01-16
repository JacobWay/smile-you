import {GET_ALARMS, RECEIVE_ALARMS} from "../actions/navBarA.js";

const navBarR = (state={
    alarmsObj: {
        num: 1,
        alarms: ['?']
    }
}, action) => {
    const alarmsObj = action.alarmsObj;
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

export {navBarR};
