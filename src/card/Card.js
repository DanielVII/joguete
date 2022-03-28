import './Card.css';

function Card() {
  return (
    <div class="card-posicao">
      <img src="https://i.imgur.com/1h6AovY.jpeg" 
      alt="imagem da carta" class="card-em-si"/>
      

      <button type="button"  class="botao-habilidade" id="botao-passiva" onClick="acao-passiva">
      <img src="https://i.imgur.com/IcXE6ap.jpeg" alt="img-habilidade" class="img-habilidade" id="img-passiva"/>
      </button>

      <button type="button"  class="botao-habilidade" id="botao-habilidade-arma">
      <img src="https://i.imgur.com/IcXE6ap.jpeg" alt="img-habilidade" class="img-habilidade" id="img-habilidade-arma"/>
      </button>

      <button type="button"  class="botao-habilidade" id="botao-habilidade-um">
      <img src="https://i.imgur.com/IcXE6ap.jpeg" alt="img-habilidade" class="img-habilidade" id="img-habilidade-um"/>
      </button>

      <button type="button"  class="botao-habilidade" id="botao-habilidade-dois">
      <img src="https://i.imgur.com/IcXE6ap.jpeg" alt="img-habilidade" class="img-habilidade" id="img-habilidade-dois"/>
      </button>

      {/* <script>
        function acao-passiva() {
          const passiva = document.querrySelect("#img-passiva");

        }
      </script>  */}

    </div>
      
    
  );
}

export default Card;