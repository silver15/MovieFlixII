import './styles.css';

const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <div className="base-card movie-details-card">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
                <img src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg" alt="Nome do filme" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="name-movie">
                <h6>O Retorno do Rei</h6>
                <p>2013</p>
                <div className="subtitulo-descrition">
                <p >O olho do inimigo está se movendo.</p>
                </div>
               
            </div>
            <div className="description-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, fuga.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
