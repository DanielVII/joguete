import { Component } from "react";

import HabilPassiva from "./HabilPassiva";
import HabilArma from "./HabilArma";
import HabilUm from "./HabilUm";
import HabilDois from "./HabilDois";

export default class Card extends Component {
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

                <div className="caixa-texto-habil caixa-texto-habil-passiva">
                    <span className="nome-habil">Crise de riso</span>
                    <span className="acao-habil">
                        Solta uma piada muito boa, fazendo a equipe ter uma
                        crise de riso. Por consequência, todos perdem um turno,
                        mas, no próximo terão um grande buff.
                    </span>
                </div>
                <HabilPassiva />

                <div className="caixa-texto-habil caixa-texto-habil-arma">
                    <span className="nome-habil">Solta o som</span>
                    <span className="acao-habil">
                        Escolhe uma música adequada a situação, dando um leve
                        buff.
                    </span>
                </div>
                <HabilArma playPause={this.playPause.bind(this)} />

                <div className="caixa-texto-habil caixa-texto-habil-um">
                    <span className="nome-habil">Piadola</span>
                    <span className="acao-habil">
                        Solta uma piadola que dá um pequeno buff e acumula
                        pensamento.
                    </span>
                </div>
                <HabilUm />

                <div className="caixa-texto-habil caixa-texto-habil-dois">
                    <span className="nome-habil">TO COM DEPRESSÃO</span>
                    <span className="acao-habil">
                        Lança AirPods no inimigo, acertando bem na orelha e o
                        fazendo escutar musicas tristes. Com isso, deixando-o
                        mais fraco.
                    </span>
                </div>
                <HabilDois playPause={this.playPause.bind(this)} />
            </div>
        );
    }
}
