import MovieCard from "componests/MovieCard";

import "./styles.css";

const CatalogMovie = () => {
  return (
    <div className=" container my-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default CatalogMovie;
