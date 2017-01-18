import {
    RECEIVE_SIDEBAR,
    receiveSideBarA
} from "../../src/actions/sideBarA.js";


describe("actions", function(){
    it("should return sideBarA action object", function(){
        const expectedAction = {
            type: RECEIVE_SIDEBAR,
            menuList: []
        };

        const data = [];
        const action = receiveSideBarA(data);

        expect(action).toEqual(expectedAction);
    });
});


