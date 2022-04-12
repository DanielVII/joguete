import React, { Component } from "react";

export default class HabilArma extends Component {
    constructor(props) {
        super(props);

        this.nomeClasse = ".caixa-texto-habil-arma";
        this.state = {};
    }

    render() {
        return (
            <button
                type="button"
                onClick={this.props.acaoArma}
                className="carta_habilidade carta_habil-arma"
                onMouseEnter={() => this.props.inside(this.nomeClasse)}
                onMouseLeave={() => this.props.outside(this.nomeClasse)}
            >
                <img
                    src={this.props.imgArma}
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                    id={this.props.idArma}
                />
            </button>
        );
    }
}
