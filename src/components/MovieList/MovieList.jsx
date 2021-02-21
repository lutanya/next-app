import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import NoMovieFound from '../NoMovieFound/NoMovieFound';

function MovieList({ movies, loading }) {
  if (loading) return <>Loading...</>
  return (
    <>
      {
        movies.length > 0
          ? (
            <>
              <p>
                {movies.length}
                {' '}
              movies found
            </p>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </>
          )
          : <NoMovieFound />
      }
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.filter.movies,
  loading: state.filter.loading,
});


export default connect(mapStateToProps, null)(MovieList);
