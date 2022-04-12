import { Component } from "react";
import "./estilo.css";
import CharD from "../CharD";

export default class Deck extends Component {
    render() {
        return (
            <section className="container-deck">
                <CharD />
            </section>
        );
    }
}
