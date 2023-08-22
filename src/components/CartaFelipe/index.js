import Carta from "../Carta"
import "./CartaFelipe.css"

const CartaFelipe = () => {
    const imgSrc = "https://i.imgur.com/vb59sGM.png"
    const idCarta = "felipedutra"

    const tituloHabilidade = {
        um: "Quebra Tudo",
        dois: "PC bomba",
    };
    const textoHabilidade = {
        um: "Destrua a parede mais proxima.",
        dois: "Seu computar para de funcionar.",
    };

    const imgsBotao = {
        um: "",
        dois: "",
    };

    const acaoUm = () => {
        let site = document.getElementsByClassName("site")[0]
        while(site.firstChild){
            //Enquanto existi elemento dentro do site, ele será excluido.
            site.removeChild(site.firstChild);
        }

        let divCaixaTextoPosAcaoUm = document.createElement("div")
        divCaixaTextoPosAcaoUm.className = "caixa-texto-pos-acao-um"

        let h1Text = document.createElement("h1")
        h1Text.innerHTML = "404"

        let pText = document.createElement("p")
        pText.innerHTML = "Pagina não encontrada"

        divCaixaTextoPosAcaoUm.appendChild(h1Text)
        divCaixaTextoPosAcaoUm.appendChild(pText)

        site.appendChild(divCaixaTextoPosAcaoUm)


    }

    const acaoDois = () => {

    }

    return (
        <Carta
            srcImgCarta={imgSrc}
            titulosHabilidades={tituloHabilidade}
            textoshabilidades={textoHabilidade}
            srcImgsBotao={imgsBotao}
            acaoUm={acaoUm}
            acaoDois={acaoDois}
            idCarta={idCarta}
        />
    )
}

export default CartaFelipe