import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import {navBarR} from "../reducers/navBarR.js";

const loggerMiddleware = createLogger();

const configureStore = () => {
    return createStore(
        navBarR,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
}

export {configureStore};
