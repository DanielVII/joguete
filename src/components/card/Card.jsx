import { Component } from "react";
import "./Card.css";

export default class Card extends Component {
    render() {
        return (
            <div class="card-posicao">
                <img
                    src="https://i.imgur.com/1h6AovY.jpeg"
                    alt="imagem da carta"
                    class="card-em-si"
                />
                {/* {Array.of(
                    "botao-passiva,acaoPassiva(),https://i.imgur.com/IcXE6ap.jpeg,img-passiva",
                    ("botao-habilidade-arma",
                    "acaoPassiva()",
                    "https://i.imgur.com/IcXE6ap.jpeg",
                    "img-habilidade-arma"),
                    ("botao-habilidade-um",
                    "acaoPassiva()",
                    "https://i.imgur.com/IcXE6ap.jpeg",
                    "img-habilidade-um"),
                    ("botao-habilidade-dois",
                    "acaoPassiva()",
                    "https://i.imgur.com/IcXE6ap.jpeg",
                    "img-habilidade-dois")
                ).map((idBotao) => {
                    console.log(idBotao);

                    return <div></div>;
                })} */}

                <button
                    type="button"
                    class="botao-habilidade"
                    id="botao-habilidade-arma"
                >
                    <img
                        src="https://i.imgur.com/IcXE6ap.jpeg"
                        alt="img-habilidade"
                        class="img-habilidade"
                        id="img-habilidade-arma"
                    />
                </button>

                <button
                    type="button"
                    class="botao-habilidade"
                    id="botao-habilidade-um"
                >
                    <img
                        src="https://i.imgur.com/IcXE6ap.jpeg"
                        alt="img-habilidade"
                        class="img-habilidade"
                        id="img-habilidade-um"
                    />
                </button>

                <button
                    type="button"
                    class="botao-habilidade"
                    id="botao-habilidade-dois"
                >
                    <img
                        src="https://i.imgur.com/IcXE6ap.jpeg"
                        alt="img-habilidade"
                        class="img-habilidade"
                        id="img-habilidade-dois"
                    />
                </button>
            </div>
        );
    }
}
