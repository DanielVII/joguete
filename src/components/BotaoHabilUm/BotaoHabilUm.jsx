import { Component } from "react";
import "./estilo.css";
export default class BotaoHabilUm extends Component {
    render() {
        return (
            <button
                type="button"
                className="carta_botao-habilidade"
                id="carta_botao-habilidade-um"
            >
                <img
                    src="https://i.imgur.com/7Zgn1IK.png"
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                    id="carta_img-habilidade-um"
                />
            </button>
        );
    }
}
