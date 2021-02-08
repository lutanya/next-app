import React from 'react';
import PropTypes from 'prop-types';
import {StyledFilterButton} from './StyledFilterButton';
import {connect} from 'react-redux';
import {fetchMovies} from '../../redux/action';
import Router  from 'next/router';

/**
 * @param {string} genre search param
 * @param {Function} fetchByGenreProp search function
 * @return {Element} search burron on the search pane
 */
function FilterButton({genre, fetchByGenreProp, sortParam}) {
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
