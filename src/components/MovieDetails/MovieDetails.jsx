import React from 'react';
import Link from 'next/link';
import { StyledImg } from './StyledImg';
import { StyledTimeInfo } from './StyledTimeInfo';
import { StyledTitle } from './StyledTitle';
import { StyledMovieDetails } from './StyledMovieDetails';
import PropTypes from 'prop-types';

export default function MovieDetails({ movie }) {
  const release = movie ? movie.release_date.split('-')[0] : null;

  return (
    movie
      ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/" className="close-link">close</Link>
          </div>
          <StyledMovieDetails>
            <StyledImg src={movie.poster_path} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <StyledTitle>
                {movie.title}
                <span>{movie.vote_average}</span>
              </StyledTitle>
              {movie.tagline}
              <StyledTimeInfo>
                {release}
                {movie.runtime}
                {' '}
                min
              </StyledTimeInfo>
              {movie.overview}
            </div>
          </StyledMovieDetails>
        </>
      )
      : null
  );
}

MovieList.propTypes = {
  movie: PropTypes.array.isRequired
};