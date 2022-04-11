import { Component } from "react";
import "./estilo.css";
import CardD from "../CardD";

export default class Deck extends Component {
    render() {
        return (
            <section className="container-deck">
                <CardD />
            </section>
        );
    }
}
