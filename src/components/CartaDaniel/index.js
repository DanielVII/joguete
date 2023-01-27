import api from "../../services/api";
import React, { Component } from "react";
import Carta from "../Carta";

import songArma from "./assets/static/jazz.mp3";
import sadSong1 from "./assets/static/sadSong1.mp3";
import sadSong2 from "./assets/static/sadSong2.mp3";
import sadSong3 from "./assets/static/sadSong3.mp3";

const CartaDaniel = () =>{

        const imgCarta = "https://i.imgur.com/1h6AovY.jpeg";

        const tituloHabilidade = {
            passiva: "Crise de riso",
            arma: "Solta o som",
            um: "Piadola",
            dois: "TO COM DEPRESSÃO",
        };
        const textoHabilidade = {
            passiva:"Solta uma piada muito boa quando acumula pensamento, fazendo a equipe ter uma crise de riso. Por consequência, todos perdem um turno,mas, no próximo terão um grande buff.",
            arma: "Escolhe uma música adequada a situação, dando um leve buff.",
            um: "Solta uma piadola que dá um pequeno buff e acumula pensamento.",
            dois: "Lança AirPods no inimigo, acertando bem na orelha e o fazendo escutar musicas tristes. Com isso, deixando-o mais fraco.",
        };

        const imgsBotao = {
            passiva:"https://i.imgur.com/U8yQXgO.jpg",
            arma: "https://i.imgur.com/cbdHquV.jpg",
            um: "https://i.imgur.com/7Zgn1IK.png",
            dois: "https://i.imgur.com/caR9gB4.png",
        };

        const idsImgBotao = {
            passiva: "carta-d_img-habil-passiva",
            arma: "carta-d_img-habil-arma",
            um: "carta-d_img-habil-um",
            dois: "carta-d_img-habil-dois",
        };

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
                srcImgCarta={imgCarta}
                tituloHabilidades={tituloHabilidade}
                textoshabilidades={textoHabilidade}
                srcImgsBotao={imgsBotao}
                acaoPassiva={acaoPassiva}
                acaoArma={acaoArma}
                acaoUm={acaoUm}
                acaoDois={acaoDois}
            />
        );
}

export default CartaDaniel
