import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubmitButton, StyledButton } from '../Button/StyledButton.js';

/**
 * @return {Element} returns button with modal window
 * @param {string} buttonClass class defining button styles
 * @param {string} buttonLabel label on the button
 * @param {string} title title of the modal window
 */

export default function DeleteMovieForm({ movie, handleDeleteMovie }) {
  return (
    <form>
      Are you sure you want to delete this movie?
      <StyledButton
        label="CONFIRM"
        onClick={(event) => handleDeleteMovie(event, movie)}
        colored
        position={StyledSubmitButton}
      >
        CONFIRM
      </StyledButton>
    </form>
  );
}

DeleteMovieForm.propTypes = {
  movie: PropTypes.object.isRequired,
  handleDeleteMovie: PropTypes.func.isRequired,
};
