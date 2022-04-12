import { Component } from "react";

import HabilPassiva from "./HabilPassiva";
import HabilArma from "./HabilArma";
import HabilUm from "./HabilUm";
import HabilDois from "./HabilDois";

export default class Card extends Component {
    constructor() {
        super();
        this.tituloHabilidade = [
            "Crise de riso",
            "Solta o som",
            "Piadola",
            "TO COM DEPRESSÃO",
        ];
        this.textoHabilidade = [
            "Solta uma piada muito boa quando acumula pensamento, fazendo a equipe ter uma crise de riso. Por consequência, todos perdem um turno,mas, no próximo terão um grande buff.",
            "Escolhe uma música adequada a situação, dando um leve buff.",
            "Solta uma piadola que dá um pequeno buff e acumula pensamento.",
            "Lança AirPods no inimigo, acertando bem na orelha e o fazendo escutar musicas tristes. Com isso, deixando-o mais fraco.",
        ];

        this.tipoHabilidade = [
            "caixa-texto-habil caixa-texto-habil-passiva",
            "caixa-texto-habil caixa-texto-habil-arma",
            "caixa-texto-habil caixa-texto-habil-um",
            "caixa-texto-habil caixa-texto-habil-dois",
        ];
    }

    playPause(audio, isplaying) {
        if (isplaying) {
            audio.pause();
        } else {
            audio.load();
            audio.play();
            audio.loop = true;
        }
    }

    render() {
        return (
            <div className="carta">
                <img
                    src="https://i.imgur.com/1h6AovY.jpeg"
                    alt="imagem da carta"
                    className="carta_img"
                />
                {this.tipoHabilidade.map((classe, index) => {
                    return (
                        <div className={classe} key={index}>
                            <span className="nome-habil">
                                {this.tituloHabilidade[index]}
                            </span>
                            <span className="acao-habil">
                                {this.textoHabilidade[index]}
                            </span>
                        </div>
                    );
                })}
                <HabilPassiva />

                <HabilArma playPause={this.playPause.bind(this)} />

                <HabilUm />

                <HabilDois playPause={this.playPause.bind(this)} />
            </div>
        );
    }
}
