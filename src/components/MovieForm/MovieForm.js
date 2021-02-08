import React from 'react';
import {StyledButton, StyledResetButton, StyledSubmitButton} from '../Button/StyledButton.js';
import Input from '../Input/Input';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {handleFormErrors} from '../../redux/action';


export function formInputs(movie, placeholder, errors) {
  return Object.entries(movie).map((entity, i) => (
    <Input
      key={entity[0]}
      value={entity[1]}
      label={entity[0]}
      placeholder={placeholder[i]}
      error={errors[entity[0]]}
    />
  ),
  );
}

/**
 * @return {Element} returns button with modal window
 * @param {string} buttonClass class defining button styles
 * @param {string} buttonLabel label on the button
 * @param {string} title title of the modal window
 */

function AddMovieForm(
    {
      movie,
      placeholder,
      errors,
      submitLable,
      handleFormReset,
      handleFormSubmit,
      handleFormErrors,
    },
) {
  return (
    <>
      <form>
        {formInputs(movie, placeholder, errors)}
        <StyledButton
          onClick={(event) => handleFormReset(event)}
          empty
          position={StyledResetButton}
        >
          RESET
        </StyledButton>
        <StyledButton
          onClick={(event) => handleFormSubmit(event, movie, handleFormErrors)}
          colored
          position={StyledSubmitButton}
        >
          {submitLable}
        </StyledButton>
      </form>
    </>
  );
}

AddMovieForm.propTypes = {
  movie: PropTypes.object.isRequired,
  placeholder: PropTypes.array,
  errors: PropTypes.array,
  submitLable: PropTypes.string.isRequired,
  handleFormReset: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleFormErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.modal.errors,
});

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleFormErrors: (errors) => dispatch(handleFormErrors(errors)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieForm);
