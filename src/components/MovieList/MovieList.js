import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { MovieCard } from '../MovieCard/MovieCard';
import NoMovieFound from '../NoMovieFound/NoMovieFound';
import { searchMovie } from '../../redux/action';
import { initStore } from '../../redux/store/store';

function MovieList({
  movies, handleSearchMovie, loading, searchQuery,
}) {
  if (searchQuery != undefined) {
    useEffect(() => {
      handleSearchMovie(searchQuery);
    }, [handleSearchMovie, searchQuery]);
  }

  if (loading) {
    return <>loading...</>;
  }

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
  handleSearchMovie: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.filter.movies,
  loading: state.filter.loading,
});

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleSearchMovie: (input) => dispatch(searchMovie(input)),
  };
}

MovieList.getInitialProps = async function (ctx) {
  initialize(ctx);

  const { loading } = ctx.store.getState();
  if (loading) {
    const response = await initStore.dispatch(searchMovie(ctx.query.searchQuery));
    const movies = response.data;
    return {
      movies,
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
