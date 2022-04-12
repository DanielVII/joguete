import React, { Component } from "react";

export default class HabilDois extends Component {
    constructor(props) {
        super(props);

        this.nomeClasse = ".caixa-texto-habil-dois";

        this.state = {};
    }

    render() {
        return (
            <button
                type="button"
                onClick={this.props.acaoDois}
                className="carta_habilidade carta_habil-dois"
                onMouseEnter={() => this.props.inside(this.nomeClasse)}
                onMouseLeave={() => this.props.outside(this.nomeClasse)}
            >
                <img
                    src={this.props.imgDois}
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                    id={this.props.idDois}
                />
            </button>
        );
    }
}
