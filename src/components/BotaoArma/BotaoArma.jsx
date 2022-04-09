import { Component } from "react";
import songArma from "../../assets/static/jazz.mp3";
import "./estilo.css";

export default class BotaoArma extends Component {
    state = {
        audio: new Audio(songArma),
        isPlaying: false,
    };

    _handleBotaoArma() {
        let isPlaying = this.state.isPlaying;
        this.props.playPause(this.state.audio, isPlaying);
        this.setState({ isPlaying: !isPlaying });

        let image = document.querySelector("#carta_img-habilidade-arma");
        if (isPlaying) {
            image.src = "https://i.imgur.com/cbdHquV.jpg";
        } else {
            image.src = "https://i.imgur.com/I9yx1ab.jpg";
        }
    }

    render() {
        return (
            <button
                type="button"
                onClick={this._handleBotaoArma.bind(this)}
                className="carta_botao-habilidade"
                id="carta_botao-habilidade-arma"
            >
                <img
                    src="https://i.imgur.com/cbdHquV.jpg"
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                    id="carta_img-habilidade-arma"
                />
            </button>
        );
    }
}
