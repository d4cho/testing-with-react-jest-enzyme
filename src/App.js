import React from "react";

import "./App.scss";
import Header from "./components/header";
import Headline from "./components/headline";

const tempArr = [
    {
        fName: "Joe",
        lName: "Bloggs",
        email: "joebloggs@gmail.com",
        age: 24,
        onlineStatus: true,
    },
];

const App = () => {
    return (
        <div className="App">
            <Header />
            <section className="main">
                <Headline
                    header="Posts"
                    desc="Click the button to render posts!"
                    tempArr={tempArr}
                />
            </section>
        </div>
    );
};

export default App;
