import api from "../../services/api";
import React, { Component } from "react";
import Carta from "../Carta";

import songArma from "./assets/static/jazz.mp3";
import sadSong1 from "./assets/static/sadSong1.mp3";
import sadSong2 from "./assets/static/sadSong2.mp3";
import sadSong3 from "./assets/static/sadSong3.mp3";

const CartaDaniel = () =>{

        const imgCarta = "https://i.imgur.com/1h6AovY.jpeg";

        const tituloHabilidade = [
            "Crise de riso",
            "Solta o som",
            "Piadola",
            "TO COM DEPRESSÃO",
        ];
        const textoHabilidade = [
            "Solta uma piada muito boa quando acumula pensamento, fazendo a equipe ter uma crise de riso. Por consequência, todos perdem um turno,mas, no próximo terão um grande buff.",
            "Escolhe uma música adequada a situação, dando um leve buff.",
            "Solta uma piadola que dá um pequeno buff e acumula pensamento.",
            "Lança AirPods no inimigo, acertando bem na orelha e o fazendo escutar musicas tristes. Com isso, deixando-o mais fraco.",
        ];

        const imgsBotao = [
            "https://i.imgur.com/U8yQXgO.jpg",
            "https://i.imgur.com/cbdHquV.jpg",
            "https://i.imgur.com/7Zgn1IK.png",
            "https://i.imgur.com/caR9gB4.png",
        ];

        const idsImgBotao = [
            "carta-d_img-habil-passiva",
            "carta-d_img-habil-arma",
            "carta-d_img-habil-um",
            "carta-d_img-habil-dois",
        ];

        const state = {
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

            mama: [],
        };
    

   const componentDidMount = () => {
         const response = api.get("habilidades/?format=json");

         setState({ mama: response.data });

     }
   const playPause = (audio, isplaying) => {
        if (isplaying) {
            audio.pause();
        } else {
            audio.load();
            audio.play();
            audio.loop = true;
        }
    }

    const acaoPassiva = () => {
        console.log(state.mama[0]["url_img_passiva"]);
    }

   const acaoArma = () => {
        playPause(state.songJazz, state.isPlayingJazz);
        setState({ isPlayingJazz: !state.isPlayingJazz });

        let imgem = document.querySelector("#carta-d_img-habil-arma");
        if (state.isPlayingJazz) {
            imgem.src = "https://i.imgur.com/cbdHquV.jpg";
        } else {
            imgem.src = "https://i.imgur.com/I9yx1ab.jpg";
        }

        console.log(state.mama);
    }

    const acaoUm = () => {
        console.log("BOOOOOM. nada acontece");
    }

    const seletor = () => {
        return Math.floor(Math.random() * 3);
    }

    const acaoDois = () => {
        if (state.playingNowSadOnline) {
            playPause(
                state.playingNowSad,
                state.playingNowSadOnline
            );
        }

        setState({ playingNowSadOnline: !state.playingNowSadOnline });

        const newSong = state.sadSong[seletor()];

        setState({ playingNowSad: newSong });

        playPause(newSong, state.isPlayingSad);

        setState({ isPlayingSad: !state.isPlayingSad });

        let imgem = document.querySelector("#carta-d_img-habil-dois");
        if (state.isPlayingSad) {
            imgem.src = "https://i.imgur.com/caR9gB4.png";
        } else {
            imgem.src = "https://i.imgur.com/boHEiAp.png";
        }
    }

        return (
            <Carta    
                imgCarta={imgCarta}
                tituloHabilidade={tituloHabilidade}
                textoHabilidade={textoHabilidade}
                imgsBotao={imgsBotao}
                idsImgBotao={idsImgBotao}
                acaoPassiva={acaoPassiva.bind(this)}
                acaoArma={acaoArma.bind(this)}
                acaoUm={acaoUm.bind(this)}
                acaoDois={acaoDois.bind(this)}
            />
        );
}
