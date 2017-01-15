import {GET_ALARMS, RECEIVE_ALARMS} from "../actions/navBarA.js";

const navBarR = (state={
    num: 3,
    alarmsObj: []
}, action) => {
    return {
        num: 3,
        alarmsObj: ["abc"]
    }
    const {num, alarmsObj} = action.data;
    switch (action.type){
        case RECEIVE_ALARMS:
            newState = {
                ...state,
                num,
                alarmsObj
            }
            return newState;
        default:
            return state;
    }
}

export {navBarR};
