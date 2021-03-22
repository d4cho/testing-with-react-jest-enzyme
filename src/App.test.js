import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../utils";

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />)
        .childAt(0)
        .dive();
    return wrapper;
};

describe("App Component", () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
                { title: "test title 1", body: "some text 1" },
                { title: "test title 2", body: "some text 2" },
                { title: "test title 3", body: "some text 3" },
            ],
        };
        wrapper = setup(initialState);
    });

    it("should render without errors", () => {
        const component = findByTestAtrr(wrapper, "appComponent");
        expect(component.length).toBe(1);
    });
});
