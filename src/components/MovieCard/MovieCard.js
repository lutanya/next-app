import React, { useMemo } from 'react';
import LongMenu from '../EditMenu/EditMenu.js';
import { StyledMovieCard, StyledDescription } from './StyledMovieCard.js';
import PropTypes from 'prop-types';
import { StyledImg } from './StyledImg.js';
import Link from 'next/link';

export function MovieCard({ movie }) {
  const genres = useMemo(() =>
    movie.genres.length == 2
      ? movie.genres.join('&')
      : movie.genres.join(', '),
    [movie.genres]);
  const release = useMemo(() => movie.release_date.split('-')[0], [movie.release_date]);
  return (
    <StyledMovieCard>
        <LongMenu movie={movie} />
        <Link
            href={`/movie/${movie.id}`}
          >
            <a style={{ textDecoration: 'none', color: 'inherit' }}>
          <StyledImg src={movie.poster_path} />
          <StyledDescription>
            <h3>{movie.title}</h3>
            <p>{genres}</p>
            <div>{release}</div>
          </StyledDescription>
          </a>
          </Link>
    </StyledMovieCard>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
