import React from "react";
import { shallow } from "enzyme";
import ListItem from "./index";
import { findByTestAtrr, checkProps } from "../../../utils";

describe("ListItem Component", () => {
    describe("Checking PropTypes", () => {
        it("should not throw a warning", () => {
            const expectedProps = {
                title: "Test title",
                desc: "Test desc",
            };
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe("Component renders", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: "Test title",
                desc: "Test desc",
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it("should render without errors", () => {
            const component = findByTestAtrr(wrapper, "listItemComponent");
            expect(component.length).toBe(1);
        });

        it("should render a title", () => {
            const title = findByTestAtrr(wrapper, "componentTitle");
            expect(title.length).toBe(1);
        });

        it("should render a desc", () => {
            const desc = findByTestAtrr(wrapper, "componentDesc");
            expect(desc.length).toBe(1);
        });
    });

    describe("Should NOT render", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: "Test desc",
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it("Component is not rendered", () => {
            const component = findByTestAtrr(wrapper, "listItemComponent");
            expect(component.length).toBe(0);
        });
    });
});
