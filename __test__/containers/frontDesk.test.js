import React from "react";
import sinon from "sinon";
import {expect} from "chai";
import {shallow, render, mount} from "enzyme";
import {Main} from "../../src/containers/frontDesk.js";

function setup(){
    const props = {
        name: "Jacob",
        alarmsObj: {
            num: -1,
            alarms: []
        },
        menuList: []
    };

    const MainWrapper = shallow(<Main {...props}/>);

    return {
        props,
        MainWrapper,
    };
}

describe("components <Main />", () => {
    it("exists NavBar", () => {
        const {props, MainWrapper} = setup();

        expect(MainWrapper.find("NavBar").length).to.equal(1);
    });

    it("exists SideBarWrapper", () => {
        const {props, MainWrapper} = setup();

        expect(MainWrapper.find("SideBarWrapper").length).to.equal(1);
    });

    it("default value of NavBar props", () => {
        const {props} = setup();
        expect(props.name).to.equal("Jacob");
        expect(props.alarmsObj).to.deep.equal({num: -1, alarms: []});
    });

    it("default value of SideBarWrapper props", () => {
        const {props} = setup();
        expect(props.menuList).to.deep.equal([]);
    });

    it("simulate click event", () => {
        // todo
    });
});

