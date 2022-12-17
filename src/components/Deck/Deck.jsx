import { Component } from "react";
import "./estilo.css";
import CartaDaniel from "../CartaDaniel";

export default class Deck extends Component {
    render() {
        return (
            <section className="container-deck">
                <CartaDaniel />
            </section>
        );
    }
}
