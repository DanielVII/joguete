import React, { Component } from "react";

export default class HabilUm extends Component {
    constructor(props) {
        super(props);

        this.nomeClasse = ".caixa-texto-habil-um";

        this.state = {};
    }

    render() {
        return (
            <button
                type="button"
                className="carta_habilidade carta_habil-um"
                onClick={this.props.acaoUm}
                onMouseEnter={() => this.props.inside(this.nomeClasse)}
                onMouseLeave={() => this.props.outside(this.nomeClasse)}
            >
                <img
                    src={this.props.imgUm}
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                    id={this.props.idUm}
                />
            </button>
        );
    }
}
