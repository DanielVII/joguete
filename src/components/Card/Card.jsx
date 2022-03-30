import { Component } from "react";
import "./estilo.css";

export default class Card extends Component {
    render() {
        return (
            <div className="carta">
                <img
                    src="https://i.imgur.com/1h6AovY.jpeg"
                    alt="imagem da carta"
                    className="carta_img"
                />

                {Array.of(
                    [
                        "carta_botao-passiva",
                        "acaoPassiva()",
                        "https://i.imgur.com/IcXE6ap.jpeg",
                        "carta_img-passiva",
                    ],
                    [
                        "carta_botao-habilidade-arma",
                        "acaoHabilArma()",
                        "https://i.imgur.com/IcXE6ap.jpeg",
                        "carta_img-habilidade-arma",
                    ],
                    [
                        "carta_botao-habilidade-um",
                        "acaoHabilUm()",
                        "https://i.imgur.com/IcXE6ap.jpeg",
                        "carta_img-habilidade-um",
                    ],
                    [
                        "carta_botao-habilidade-dois",
                        "acaoHabilDois()",
                        "https://i.imgur.com/IcXE6ap.jpeg",
                        "carta_img-habilidade-dois",
                    ]
                ).map((infos, index) => {
                    let idBotao = infos[0];
                    let acao = infos[1];
                    let linkImg = infos[2];
                    let idImg = infos[3];

                    return (
                        <button
                            key={index}
                            type="button"
                            onClick={acao}
                            className="carta_botao-habilidade"
                            id={idBotao}
                        >
                            <img
                                src={linkImg}
                                alt="img-habilidade"
                                className="carta_img-habilidade"
                                id={idImg}
                            />
                        </button>
                    );
                })}
            </div>
        );
    }
}
