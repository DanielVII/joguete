import React, { useState } from "react"
import Carta from "../Carta"

import jazzmp3 from "./assets/static/Music/jazz.mp3"
import sadSong1mp3 from "./assets/static/Music/sadSong1.mp3"
import sadSong2mp3 from "./assets/static/Music/sadSong2.mp3"
import sadSong3mp3 from "./assets/static/Music/sadSong3.mp3"


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


    const [tocandoJazz, setTocandoJazz] = useState(false)
    const [jazz] = useState(new Audio(jazzmp3))
    jazz.loop = true;
    const acaoUm = () => {

        const imgBotao = document.getElementById(idCarta).querySelector(".botao-habilidade-um").querySelector(".img-habilidade")

        if (tocandoJazz) {
            imgBotao.src = "https://i.imgur.com/cbdHquV.jpg"
            jazz.pause()
            setTocandoJazz(false)
        } else {
            imgBotao.src = "https://i.imgur.com/I9yx1ab.jpg"
            jazz.load();
            jazz.play();

            setTocandoJazz(true)
        }

    }


    const [tocandoSad, setTocandoSad] = useState(false)
    const [sadSong1] = useState(new Audio(sadSong1mp3))
    const [sadSong2] = useState(new Audio(sadSong2mp3))
    const [sadSong3] = useState(new Audio(sadSong3mp3))
    const [seletor, setSeletor] = useState(1)

    const acaoDois = () => {

        const imgBotao = document.getElementById(idCarta).querySelector(".botao-habilidade-dois").querySelector(".img-habilidade")

        if (tocandoSad) {
            switch (seletor) {
                case 1:
                    sadSong1.pause()
                    break;
                case 2:
                    sadSong2.pause()
                    break;
                case 3:
                    sadSong3.pause()
                    break;
                default:
                    console.log("Doidera")
            }
            setTocandoSad(false)
            setSeletor(Math.floor(Math.random() * 3))

            imgBotao.src = "https://i.imgur.com/caR9gB4.png"
        } else {
            switch (seletor) {
                case 1:
                    sadSong1.load()
                    sadSong1.play()
                    break;
                case 2:
                    sadSong2.load()
                    sadSong2.play()
                    break;
                case 3:
                    sadSong3.load()
                    sadSong3.play()
                    break;
                default:
                    console.log("Doidera")
            }
            setTocandoSad(true)
            imgBotao.src = "https://i.imgur.com/boHEiAp.png"
        }


    }

    return (
        <Carta
            srcImgCarta={imgCarta}
            titulosHabilidades={tituloHabilidade}
            textoshabilidades={textoHabilidade}
            srcImgsBotao={imgsBotao}
            acaoUm={acaoUm}
            acaoDois={acaoDois}
            idCarta={idCarta}
        />
    );
}

export default CartaDaniel
