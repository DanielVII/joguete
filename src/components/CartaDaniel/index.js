import React, { Component } from "react";
import Carta from "../Carta";

const CartaDaniel = () => {

    const imgCarta = "https://i.imgur.com/1h6AovY.jpeg"

    const idCarta = "danieldantas"

    const tituloHabilidade = {
        um: "Solta o som",
        dois: "TO COM DEPRESSÃO",
    };
    const textoHabilidade = {
        um: "Escolhe uma música adequada a situação, dando um leve buff.",
        dois: "Lança AirPods no inimigo, acertando bem na orelha e o fazendo escutar musicas tristes. Com isso, deixando-o mais fraco.",
    };

    const imgsBotao = {
        um: "https://i.imgur.com/cbdHquV.jpg",
        dois: "https://i.imgur.com/caR9gB4.png",
    };


    // const state = {
    //     songJazz: new Audio(songArma),
    //     isPlayingJazz: false,

    //     sadSong: [
    //         new Audio(sadSong1),
    //         new Audio(sadSong2),
    //         new Audio(sadSong3),
    //     ],

    //     isPlayingSad: false,

    //     playingNowSad: new Audio(sadSong3),

    //     playingNowSadOnline: false,

    //     mama: [],
    // };


    //    const componentDidMount = () => {
    //          const response = api.get("habilidades/?format=json");

    //          setState({ mama: response.data });

    //      }
    //    const playPause = (audio, isplaying) => {
    //         if (isplaying) {
    //             audio.pause();
    //         } else {
    //             audio.load();
    //             audio.play();
    //             audio.loop = true;
    //         }
    //     }



    const acaoUm = () => {
        // playPause(state.songJazz, state.isPlayingJazz);
        // setState({ isPlayingJazz: !state.isPlayingJazz });

        // let imgem = document.querySelector("#carta-d_img-habil-arma");
        // if (state.isPlayingJazz) {
        //     imgem.src = "https://i.imgur.com/cbdHquV.jpg";
        // } else {
        //     imgem.src = "https://i.imgur.com/I9yx1ab.jpg";
        // }

        // console.log(state.mama);
        console.log("BOOOOOM. nada acontece");
    }


    const seletor = () => {
        return Math.floor(Math.random() * 3);
    }

    const acaoDois = () => {
        // if (state.playingNowSadOnline) {
        //     playPause(
        //         state.playingNowSad,
        //         state.playingNowSadOnline
        //     );
        // }

        // setState({ playingNowSadOnline: !state.playingNowSadOnline });

        // const newSong = state.sadSong[seletor()];

        // setState({ playingNowSad: newSong });

        // playPause(newSong, state.isPlayingSad);

        // setState({ isPlayingSad: !state.isPlayingSad });

        // let imgem = document.querySelector("#carta-d_img-habil-dois");
        // if (state.isPlayingSad) {
        //     imgem.src = "https://i.imgur.com/caR9gB4.png";
        // } else {
        //     imgem.src = "https://i.imgur.com/boHEiAp.png";
        // }
        console.log("BOOOOOM. nada acontece");
    }

    return (
        <>
            <audio src="./assets/static/jazz.mp3" id="som-jazz"></audio>
            <audio src="./assets/static/sadSong1.mp3" id="som-sad-1"></audio>
            <audio src="./assets/static/sadSong2.mp3" id="som-sad-2"></audio>
            <audio src="./assets/static/sadSong3.mp3" id="som-sad-3"></audio>
            <Carta
                srcImgCarta={imgCarta}
                titulosHabilidades={tituloHabilidade}
                textoshabilidades={textoHabilidade}
                srcImgsBotao={imgsBotao}
                acaoUm={acaoUm}
                acaoDois={acaoDois}
                idCarta={idCarta}
            />
        </>
    );
}

export default CartaDaniel
