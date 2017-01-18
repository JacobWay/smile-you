import {
    RECEIVE_ALARMS,
} from "../../src/actions/navBarA.js";
import {navBarR} from "../../src/reducers/navBarR.js";


describe("reducers", function(){
    it("should return the navBar state after dispatching action", function(){
        const action = {
            type: RECEIVE_ALARMS,
            alarmsObj: {
                num: 1,
                alarms: ["?"]
            }
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
        expect(state).toEqual(expectedState);
    });
});

