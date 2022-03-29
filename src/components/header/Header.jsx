import { Component } from "react";
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <div class="container-header">
                <h1 class="clicavel praianos">Praianos</h1>
                <h1 class="clicavel trevosos">Trevosos</h1>
            </div>
        );
    }
}
