import React from "react";
import sinon from "sinon";
import {expect} from "chai";
import {shallow, render, mount} from "enzyme";
import {NavBar} from "../../src/components/NavBar.js";

function setup(){
    const props = {
        name: "Jacob",
        alarmsObj: {
            num: -1,
            alarms: []
        },
    };

    const NavBarWrapper = shallow(<NavBar {...props}/>);
    const NavBarElement = render(<NavBar {...props}/>);

    return {
        props,
        NavBarWrapper,
        NavBarElement
    };
}

describe("components <NavBar />", () => {
    it("a div should have class <collapse navbar-collapse>", () => {
        const {NavBarWrapper} = setup();

        expect(NavBarWrapper.find(".collapse .navbar-collapse").length).to.equal(1);
    });

    it("test component props default value", () => {
        const {props} = setup();
        expect(props.name).to.equal("Jacob");
        expect(props.alarmsObj).to.deep.equal({num: -1, alarms: []});
    });

    it("simulate click event", () => {
        // todo
    });
});
