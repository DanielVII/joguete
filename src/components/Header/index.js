import { Component } from "react";
import "./estilo.css";

const Header = (props) => {
        return (
            <nav className="container-header">
                <h1 className="container-header_clicavel container-header_praianos">
                    Praianos
                </h1>
                <h1 className="container-header_clicavel container-header_trevosos">
                    Trevosos
                </h1>
            </nav>
        );
}

export default Header
