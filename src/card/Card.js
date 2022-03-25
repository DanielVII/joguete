import './Card.css';

function Card() {
  return (
    <div class="card-posicao">
      <img src="https://i.imgur.com/1h6AovY.jpeg" 
      alt="imagem da carta" class="card-em-si"/>
      <button type="button"  class="habilidades">
      <img src="https://i.imgur.com/IcXE6ap.jpeg" alt="doguinho"  id="passiva"/>
      </button>
    </div>
      
  );
}

export default Card;