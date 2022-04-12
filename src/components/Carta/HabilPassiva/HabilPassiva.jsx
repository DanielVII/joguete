import React, { Component } from "react";
import "./estilo.css";

export default class HabilPassiva extends Component {
    constructor(props) {
        super(props);

        this.nomeClasse = ".caixa-texto-habil-passiva";

        this.state = {};
    }

    render() {
        return (
            <button
                type="button"
                className="carta_habilidade carta_habil-passiva"
                onClick={this.props.acaoPassiva}
                onMouseEnter={() => this.props.inside(this.nomeClasse)}
                onMouseLeave={() => this.props.outside(this.nomeClasse)}
            >
                <img
                    src={this.props.imgPassiva}
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                    id={this.props.idPassiva}
                />
            </button>
        );
    }
}
