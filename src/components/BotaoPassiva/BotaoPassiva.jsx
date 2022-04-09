import { Component } from "react";

export default class BotaoPassiva extends Component {
    render() {
        return (
            <button
                type="button"
                className="carta_botao-habilidade"
                id="carta_botao-passiva"
            >
                <img
                    src="https://i.imgur.com/U8yQXgO.jpg"
                    alt="img-habilidade"
                    className="carta_img-habilidade"
                    id="carta_img-passiva"
                />
            </button>
        );
    }
}
