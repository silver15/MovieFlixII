import "./styles.css";
import MovieImg from "assets/imagem/image2.png";

const MovieCard = () => {
  return (
    <div className="base-card movie-card">
      <div className="card-top-container">
        <img src={MovieImg} alt="Nome do Filme" />
      </div>
      <div className="card-bottom-container">
        <h6>O Retorno do Rei</h6>
        <p>2012</p>
        <div className="card-subtitulo">
        <p>O olho do inimigo está se movendo.</p>
        </div>
       
      </div>
    </div>
  );
};

export default MovieCard;
