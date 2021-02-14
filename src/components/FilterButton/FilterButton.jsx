import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';
import StyledFilterButton from './StyledFilterButton';
import { fetchMovies } from '../../redux/action';

/**
 * @param {string} genre search param
 * @param {Function} fetchByGenreProp search function
 * @return {Element} search burron on the search pane
 */
function FilterButton({ genre, fetchByGenreProp, sortParam }) {
  const fetchMovie = () => {
    Router.push('/');
    fetchByGenreProp(genre, sortParam);
  };
  return (
    <StyledFilterButton onClick={fetchMovie}>
      {genre}
    </StyledFilterButton>
  );
}

FilterButton.propTypes = {
  genre: PropTypes.string.isRequired,
  fetchByGenreProp: PropTypes.func.isRequired,
  sortParam: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  sortParam: state.filter.params.sort,
});

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchByGenreProp: (genre, sortParam) => dispatch(fetchMovies(genre, sortParam)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
