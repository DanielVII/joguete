import { Component } from "react";
import "./estilo.css";
import songArma from "../../assets/static/jazz.mp3";

export default class Card extends Component {
    handleLorota() {
        console.log("aloha");
    }

    state = {
        audio: new Audio(songArma),
        isPlaying: false,
    };

    botaoArma() {
        let isPlaying = this.state.isPlaying;
        this.playPause(this.state.audio, isPlaying);
        this.setState({ isPlaying: !isPlaying });
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

                <button
                    type="button"
                    onClick={this.handleLorota.bind(this)}
                    className="carta_botao-habilidade"
                    id="carta_botao-passiva"
                >
                    <img
                        src="https://i.imgur.com/IcXE6ap.jpeg"
                        alt="img-habilidade"
                        className="carta_img-habilidade"
                        id="carta_img-passiva"
                    />
                </button>

                <button
                    type="button"
                    onClick={this.botaoArma.bind(this)}
                    className="carta_botao-habilidade"
                    id="carta_botao-habilidade-arma"
                >
                    <img
                        src="https://i.imgur.com/IcXE6ap.jpeg"
                        alt="img-habilidade"
                        className="carta_img-habilidade"
                        id="carta_img-habilidade-arma"
                    />
                </button>

                <button
                    type="button"
                    onClick={this.handleLorota.bind(this)}
                    className="carta_botao-habilidade"
                    id="carta_botao-habilidade-um"
                >
                    <img
                        src="https://i.imgur.com/IcXE6ap.jpeg"
                        alt="img-habilidade"
                        className="carta_img-habilidade"
                        id="carta_img-habilidade-um"
                    />
                </button>

                <button
                    type="button"
                    onClick={this.handleLorota.bind(this)}
                    className="carta_botao-habilidade"
                    id="carta_botao-habilidade-dois"
                >
                    <img
                        src="https://i.imgur.com/IcXE6ap.jpeg"
                        alt="img-habilidade"
                        className="carta_img-habilidade"
                        id="carta_img-habilidade-dois"
                    />
                </button>
            </div>
        );
    }
}
