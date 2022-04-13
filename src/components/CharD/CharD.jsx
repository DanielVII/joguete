import React, { Component } from "react";
import Carta from "../Carta";

import songArma from "./assets/static/jazz.mp3";
import sadSong1 from "./assets/static/sadSong1.mp3";
import sadSong2 from "./assets/static/sadSong2.mp3";
import sadSong3 from "./assets/static/sadSong3.mp3";

export default class CharD extends Component {
    constructor(props) {
        super(props);
        this.imgCarta = "https://i.imgur.com/1h6AovY.jpeg";

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

        this.imgsBotao = [
            "https://i.imgur.com/U8yQXgO.jpg",
            "https://i.imgur.com/cbdHquV.jpg",
            "https://i.imgur.com/7Zgn1IK.png",
            "https://i.imgur.com/caR9gB4.png",
        ];

        this.idsImgBotao = [
            "carta-d_img-habil-passiva",
            "carta-d_img-habil-arma",
            "carta-d_img-habil-um",
            "carta-d_img-habil-dois",
        ];

        this.state = {
            songJazz: new Audio(songArma),
            isPlayingJazz: false,

            sadSong: [
                new Audio(sadSong1),
                new Audio(sadSong2),
                new Audio(sadSong3),
            ],

            isPlayingSad: false,

            playingNowSad: new Audio(sadSong3),

            playingNowSadOnline: false,
        };
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

    acaoPassiva() {
        console.log("BOOOOOM. nada acontece");
    }

    acaoArma() {
        this.playPause(this.state.songJazz, this.state.isPlayingJazz);
        this.setState({ isPlayingJazz: !this.state.isPlayingJazz });

        let imgem = document.querySelector("#carta-d_img-habil-arma");
        if (this.state.isPlayingJazz) {
            imgem.src = "https://i.imgur.com/cbdHquV.jpg";
        } else {
            imgem.src = "https://i.imgur.com/I9yx1ab.jpg";
        }
    }

    acaoUm() {
        console.log("BOOOOOM. nada acontece");
    }

    seletor() {
        return Math.floor(Math.random() * 3);
    }

    acaoDois() {
        if (this.state.playingNowSadOnline) {
            this.playPause(
                this.state.playingNowSad,
                this.state.playingNowSadOnline
            );
        }

        this.setState({ playingNowSadOnline: !this.state.playingNowSadOnline });

        const newSong = this.state.sadSong[this.seletor()];

        this.setState({ playingNowSad: newSong });

        this.playPause(newSong, this.state.isPlayingSad);

        this.setState({ isPlayingSad: !this.state.isPlayingSad });

        let imgem = document.querySelector("#carta-d_img-habil-dois");
        if (this.state.isPlayingSad) {
            imgem.src = "https://i.imgur.com/caR9gB4.png";
        } else {
            imgem.src = "https://i.imgur.com/boHEiAp.png";
        }
    }

    render() {
        return (
            <Carta
                imgCarta={this.imgCarta}
                tituloHabilidade={this.tituloHabilidade}
                textoHabilidade={this.textoHabilidade}
                imgsBotao={this.imgsBotao}
                idsImgBotao={this.idsImgBotao}
                acaoPassiva={this.acaoPassiva.bind(this)}
                acaoArma={this.acaoArma.bind(this)}
                acaoUm={this.acaoUm.bind(this)}
                acaoDois={this.acaoDois.bind(this)}
            />
        );
    }
}
