import {
    RECEIVE_BOXLIST,
    receiveBoxListA
} from "../src/actions/boxListA.js";


describe("actions", function(){
    it("should return receiveBoxListA action object", function(){
        const expectedAction = {
            type: RECEIVE_BOXLIST,
            boxList: []
        };

        const data = [];
        const action = receiveBoxListA(data);

        expect(action).toEqual(expectedAction);
    });
});



