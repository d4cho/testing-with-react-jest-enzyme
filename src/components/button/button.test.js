import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils";
import SharedButton from "./index";

describe("SharedButton Component", () => {
    describe("Checking PropTypes", () => {
        it("should not throw a warning", () => {
            const expectedProps = {
                buttonText: "Example button text",
                emitEvent: () => {},
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe("Renders", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: "Example button text",
                emitEvent: () => {},
            };
            wrapper = shallow(<SharedButton {...props} />);
        });

        it("should render a button", () => {
            const button = findByTestAtrr(wrapper, "buttonComponent");
            expect(button.length).toBe(1);
        });
    });
});
