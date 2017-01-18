import {
    RECEIVE_SIDEBAR,
} from "../../src/actions/sideBarA.js";
import {sideBarR} from "../../src/reducers/sideBarR.js";


describe("reducers", function(){
    it("should return the sideBarR state after dispatching action", function(){
        const action = {
            type: RECEIVE_SIDEBAR,
            menuList: [{
                name: "",
                subMenu: []
            }]
        };

        const {menuList} = action;
        const state = sideBarR(
            {menuList},
            action
        );

        const expectedState = {
            menuList
        };
        expect(state).toEqual(expectedState);
    });
});


