import React, { Component } from "react";
import songArma from "../assets/static/jazz.mp3";

export default class HabilArma extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: new Audio(songArma),
            isPlaying: false,
        };
    }

    inside() {
        document.querySelector(".caixa-texto-habil-arma").style.display =
            "flex";
    }

    outside() {
        document.querySelector(".caixa-texto-habil-arma").style.display =
            "none";
    }
    _handleClick() {
        this.props.playPause(this.state.song, this.state.isPlaying);
        this.setState({ isPlaying: !this.state.isPlaying });

        let imgem = document.querySelector("#carta-d_img-habil-arma");
        if (this.state.isPlaying) {
            imgem.src = "https://i.imgur.com/cbdHquV.jpg";
        } else {
            imgem.src = "https://i.imgur.com/I9yx1ab.jpg";
        }
    }

    render() {
        return (
            <button
                type="button"
                onClick={this._handleClick.bind(this)}
                className="carta_habilidade carta_habil-arma"
                onMouseEnter={() => this.inside()}
                onMouseLeave={() => this.outside()}
            >
                <img
                    src="https://i.imgur.com/cbdHquV.jpg"
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                    id="carta-d_img-habil-arma"
                />
            </button>
        );
    }
}
