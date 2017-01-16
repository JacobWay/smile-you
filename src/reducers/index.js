import {combineReducers} from "redux";
import {navBarR} from "./navBarR.js";
import {sideBarR} from "./sideBarR.js";
import {boxListR} from "./boxListR.js";

const rootReducer = combineReducers({
    navBarR,
    sideBarR,
    boxListR
});

export {rootReducer};
