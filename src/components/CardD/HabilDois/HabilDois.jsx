import React, { Component } from "react";
import sadSong1 from "../assets/static/sadSong1.mp3";
import sadSong2 from "../assets/static/sadSong2.mp3";
import sadSong3 from "../assets/static/sadSong3.mp3";

export default class HabilDois extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: [
                new Audio(sadSong1),
                new Audio(sadSong2),
                new Audio(sadSong3),
            ],

            isPlaying: false,

            playingNow: new Audio(sadSong3),

            playingNowOnline: false,
        };
    }

    inside() {
        document.querySelector(".caixa-texto-habil-dois").style.display =
            "flex";
    }

    outside() {
        document.querySelector(".caixa-texto-habil-dois").style.display =
            "none";
    }

    seletor() {
        return Math.floor(Math.random() * 3);
    }

    _handleClick() {
        if (this.state.playingNowOnline) {
            this.props.playPause(
                this.state.playingNow,
                this.state.playingNowOnline
            );
        }

        this.setState({ playingNowOnline: !this.state.playingNowOnline });

        const newSong = this.state.song[this.seletor()];

        this.setState({ playingNow: newSong });

        this.props.playPause(newSong, this.state.isPlaying);

        this.setState({ isPlaying: !this.state.isPlaying });

        let imgem = document.querySelector("#carta-d_img-habil-dois");
        if (this.state.isPlaying) {
            imgem.src = "https://i.imgur.com/caR9gB4.png";
        } else {
            imgem.src = "https://i.imgur.com/boHEiAp.png";
        }
    }

    render() {
        return (
            <button
                type="button"
                onClick={this._handleClick.bind(this)}
                className="carta_habilidade carta_habil-dois"
                onMouseEnter={() => this.inside()}
                onMouseLeave={() => this.outside()}
            >
                <img
                    src="https://i.imgur.com/caR9gB4.png"
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                    id="carta-d_img-habil-dois"
                />
            </button>
        );
    }
}
