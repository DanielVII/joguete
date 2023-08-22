import "./Deck.css";
import CartaDaniel from "../CartaDaniel";
import CartaFelipe from "../CartaFelipe";

const Deck = (props) => {
        return (
            <section className="deck">
                <CartaDaniel />
                <CartaFelipe/>
            </section>
        );
    
}

export default Deck