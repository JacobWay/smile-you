import {RECEIVE_BOXLIST} from "../actions/boxListA.js";

const boxListR = (state={
    boxList: []
}, action) => {
    console.log("boxListR of r/boxListR.js...");
    console.log("boxListR of r/boxListR.js of state ...", state);
    const boxList = action.boxList;
    let newState;
    switch (action.type){
        case RECEIVE_BOXLIST:
            newState = {
                ...state,
                boxList
            }
            return newState;
        default:
            return state;
    }
}

export {boxListR};

