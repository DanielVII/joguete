import { Component } from "react";
import HabilPassiva from "./HabilPassiva";
import HabilArma from "./HabilArma";
import HabilUm from "./HabilUm";
import HabilDois from "./HabilDois";

export default class Carta extends Component {
    constructor(props) {
        super(props);
        this.tipoHabilidade = [
            "caixa-texto-habil-passiva",
            "caixa-texto-habil-arma",
            "caixa-texto-habil-um",
            "caixa-texto-habil-dois",
        ];
    }

    inside(nomeClasse) {
        document.querySelector(nomeClasse).style.display = "flex";
    }

    outside(nomeClasse) {
        document.querySelector(nomeClasse).style.display = "none";
    }

    render() {
        return (
            <div className="carta">
                <img
                    src={this.props.imgCarta}
                    alt="imagem da carta"
                    className="carta_img"
                />
                {this.tipoHabilidade.map((classe, index) => {
                    console.log(this.props.tituloHabilidade[index]);
                    return (
                        <div
                            className={"caixa-texto-habil " + classe}
                            key={index}
                        >
                            <span className="nome-habil">
                                {this.props.tituloHabilidade[index]}
                            </span>
                            <span className="acao-habil">
                                {this.props.textoHabilidade[index]}
                            </span>
                        </div>
                    );
                })}

                <HabilPassiva
                    acaoPassiva={this.props.acaoPassiva}
                    imgPassiva={this.props.imgPassiva}
                    idPassiva={this.props.idPassiva}
                    inside={this.inside.bind(this)}
                    outside={this.outside.bind(this)}
                />

                <HabilArma
                    acaoArma={this.props.acaoArma}
                    imgArma={this.props.imgArma}
                    idArma={this.props.idArma}
                    inside={this.inside.bind(this)}
                    outside={this.outside.bind(this)}
                />

                <HabilUm
                    acaoUm={this.props.acaoUm}
                    imgUm={this.props.imgUm}
                    idUm={this.props.idUm}
                    inside={this.inside.bind(this)}
                    outside={this.outside.bind(this)}
                />

                <HabilDois
                    acaoDois={this.props.acaoDois}
                    imgDois={this.props.imgDois}
                    idDois={this.props.idDois}
                    inside={this.inside.bind(this)}
                    outside={this.outside.bind(this)}
                />
            </div>
        );
    }
}
