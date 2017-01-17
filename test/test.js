var chai = require("chai");
//var expect = chai.expect;
var assert = require("assert");

import axios from "axios";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    RECEIVE_ALARMS,
    receiveAlarmsA,
    fetchAlarmsA
} from "../src/actions/navBarA.js";
import nock from 'nock'
import {navBarR} from "../src/reducers/navBarR.js";

describe("action", function() {
    it("should receive alarms data from receiveAlarmsA action", function() {
        console.log("typeof receiveAlarmsA... ", typeof receiveAlarmsA);
        const data = "receive data";
        const action = {
            type: RECEIVE_ALARMS,
            alarmsObj: data
        };

        expect(receiveAlarmsA(data)).toEqual(action);
    });
});

describe("reducers", function(){
    it("should return the navBar state after action", function(){
        const action = {
            type: RECEIVE_ALARMS,
            alarmsObj: ["?"]
        };

        const state = navBarR({
            alarmsObj: {
                num: 1,
                alarms: ["?"]
            }
        }, action);

        const expectedState = {
            alarmsObj: {
                num: 1,
                alarms: ["?"]
            }
        };
    });
});
