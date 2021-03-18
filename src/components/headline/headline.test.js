import React from "react";
import { shallow } from "enzyme";

import { findByTestAtrr } from "../../../utils";
import Headline from "./index";

const setup = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe("Headline Component", () => {
    describe("Has props", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: "Test Header",
                desc: "Test desc",
            };
            wrapper = setup(props);
        });

        it("should render without errors", () => {
            const component = findByTestAtrr(wrapper, "HeadlineComponent");
            // console.log(component.debug());
            expect(component.length).toBe(1);
        });

        it("should render a H1", () => {
            const h1 = findByTestAtrr(wrapper, "header");
            expect(h1.length).toBe(1);
        });

        it("should render a desc", () => {
            const desc = findByTestAtrr(wrapper, "desc");
            expect(desc.length).toBe(1);
        });
    });

    describe("Has NO props", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });

        it("should not render", () => {
            const component = findByTestAtrr(wrapper, "HeadlineComponent");
            expect(component.length).toBe(0);
        });
    });
});
