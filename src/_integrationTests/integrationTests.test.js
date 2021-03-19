import moxios from "moxios";
import { testStore } from "../../utils";
import { fetchPosts } from "../actions";

describe("fetchPosts aciton", () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test("Store is updated directly", () => {
        const expectedState = [
            {
                title: "test title 1",
                body: "some text 1",
            },
            {
                title: "test title 2",
                body: "some text 2",
            },
            {
                title: "test title 3",
                body: "some text 3",
            },
        ];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState,
            });
        });

        return store.dispatch(fetchPosts()).then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        });
    });
});
