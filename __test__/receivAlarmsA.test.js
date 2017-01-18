import {
    RECEIVE_ALARMS,
    receiveAlarmsA,
    fetchAlarmsA
} from "../src/actions/navBarA.js";

describe("action", function() {
    it("should receive alarms data from receiveAlarmsA action", function() {

        const data = {};
        const expectedAction = {
            type: RECEIVE_ALARMS,
            alarmsObj: {}
        };

        expect(receiveAlarmsA(data)).toEqual(expectedAction);
    });
});


