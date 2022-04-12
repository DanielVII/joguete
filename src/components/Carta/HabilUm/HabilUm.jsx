import React, { Component } from "react";

export default class HabilUm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    inside() {
        document.querySelector(".caixa-texto-habil-um").style.display = "flex";
    }

    outside() {
        document.querySelector(".caixa-texto-habil-um").style.display = "none";
    }

    render() {
        return (
            <button
                type="button"
                className="carta_habilidade carta_habil-um"
                onMouseEnter={() => this.inside()}
                onMouseLeave={() => this.outside()}
            >
                <img
                    src="https://i.imgur.com/7Zgn1IK.png"
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                />
            </button>
        );
    }
}
