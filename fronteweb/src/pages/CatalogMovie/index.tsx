import axios from 'axios';
import MovieCard from 'componests/MovieCard';
import Pagination from 'componests/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movies } from 'types/movies';
import { AxiosParams } from 'types/vendor/axios';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';

import './styles.css';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movies>>();

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/movies`,
      params: {
        page: 0,
        size: 12,
      },
    };

    axios(params).then((response) => {
      setPage(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className=" container my-4">
      <div className="row">
        {page?.content.map((movies) => (
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/movies/1">
              <MovieCard movies={movies} />
            </Link>
          </div>
        ))}
      </div>

      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default MovieCatalog;
