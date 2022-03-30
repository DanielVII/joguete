import { Component } from "react";
import "./estilo.css";

export default class Header extends Component {
    render() {
        return (
            <div className="container-header">
                <h1 className="container-header_clicavel container-header_praianos">
                    Praianos
                </h1>
                <h1 className="container-header_clicavel container-header_trevosos">
                    Trevosos
                </h1>
            </div>
        );
    }
}
