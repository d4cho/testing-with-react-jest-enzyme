import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils";
import SharedButton from "./index";
import { middlewares } from "../../createStore";

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
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();

            const props = {
                buttonText: "Example button text",
                emitEvent: mockFunc,
            };
            wrapper = shallow(<SharedButton {...props} />);
        });

        it("should render a button", () => {
            const button = findByTestAtrr(wrapper, "buttonComponent");
            expect(button.length).toBe(1);
        });

        it("should emit callback on click event", () => {
            const button = findByTestAtrr(wrapper, "buttonComponent");
            button.simulate("click");
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });
});
