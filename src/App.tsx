import React from "react";
import "./App.css";

import Header from "./components/Header";
import LeftArea from "./components/LeftArea";
import RightArea from "./components/RightArea";

const App = () => {
    return (
        <div className="app">
            <Header />
            <section className="main-area">
                <LeftArea />
                <RightArea />
            </section>
        </div>
    );
};

export default App;
