import { Component } from "react";
import sadSong1 from "../../assets/static/sadSong1.mp3";
import sadSong2 from "../../assets/static/sadSong2.mp3";
import sadSong3 from "../../assets/static/sadSong3.mp3";
import "./estilo.css";

export default class BotaoArma extends Component {
    state = {
        audio: [new Audio(sadSong1), new Audio(sadSong2), new Audio(sadSong3)],
        isPlaying: false,
        playingNow: new Audio(sadSong1),
        playingNowOnline: false,
    };

    _selectMusic() {
        return Math.floor(Math.random() * (3 - 0)) + 0;
    }

    _handleHabilDois() {
        if (this.state.playingNowOnline) {
            this.props.playPause(this.state.playingNow, this.state.isPlaying);
            this.setState({ isPlaying: !this.state.isPlaying });
        }
        this.setState({ playingNowOnline: !this.state.playingNowOnline });

        let selectMusic = this._selectMusic();
        let newAudio = this.state.audio[selectMusic];
        this.setState({ playingNow: newAudio });

        this.props.playPause(newAudio, this.state.isPlaying);
        this.setState({ isPlaying: !this.state.isPlaying });

        let image = document.querySelector("#carta_img-habilidade-dois");
        if (this.state.isPlaying) {
            image.src = "https://i.imgur.com/caR9gB4.png";
        } else {
            image.src = "https://i.imgur.com/boHEiAp.png";
        }
    }

    render() {
        return (
            <button
                type="button"
                onClick={this._handleHabilDois.bind(this)}
                className="carta_botao-habilidade"
                id="carta_botao-habilidade-dois"
            >
                <img
                    src="https://i.imgur.com/caR9gB4.png"
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                    id="carta_img-habilidade-dois"
                />
            </button>
        );
    }
}
