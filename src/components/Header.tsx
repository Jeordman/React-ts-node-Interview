import React from "react";
import conexedLogo from "../Conexed-logo.png";

const Header = () => (
    <header className="main-header">
        <section className="logo-holder">
            <img className="conexed-logo" src={conexedLogo} />
        </section>
        <p className="header-intro">React Typescript Test</p>
    </header>
);

export default Header;
