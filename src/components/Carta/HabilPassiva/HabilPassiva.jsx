import React, { Component } from "react";
import "./estilo.css";

export default class HabilPassiva extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    inside() {
        document.querySelector(".caixa-texto-habil-passiva").style.display =
            "flex";
    }

    outside() {
        document.querySelector(".caixa-texto-habil-passiva").style.display =
            "none";
    }

    render() {
        return (
            <button
                type="button"
                className="carta_habilidade carta_habil-passiva"
                onMouseEnter={() => this.inside()}
                onMouseLeave={() => this.outside()}
            >
                <img
                    src="https://i.imgur.com/U8yQXgO.jpg"
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                />
            </button>
        );
    }
}
