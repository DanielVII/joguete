import { Component } from "react";
import "./estilo.css";
import BotaoPassiva from "../BotaoPassiva";
import BotaoArma from "../BotaoArma";
import BotaoHabilUm from "../BotaoHabilUm";
import BotaoHabilDois from "../BotaoHabilDois";

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

                <BotaoPassiva />

                <BotaoArma playPause={this.playPause} />

                <BotaoHabilUm />

                <BotaoHabilDois playPause={this.playPause} />
            </div>
        );
    }
}
