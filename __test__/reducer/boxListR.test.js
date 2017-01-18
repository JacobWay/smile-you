import {
    RECEIVE_BOXLIST,
} from "../../src/actions/boxListA.js";
import {boxListR} from "../../src/reducers/boxListR.js";


describe("reducers", function(){
    it("should return the boxListR state after dispatching action", function(){
        const action = {
            type: RECEIVE_BOXLIST,
            boxList: []
        };

        const {boxList} = action;
        const state = boxListR(
            {boxList},
            action
        );

        const expectedState = {
            boxList
        };
        expect(state).toEqual(expectedState);
    });
});



