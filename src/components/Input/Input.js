import React, {useMemo} from 'react';
import {StyledInput} from './StyledInput';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {handleInputChange} from '../../redux/action';
import CheckboxSelector from '../CheckboxSelector/CheckboxSelector';

import {
  RELEASE_DATE,
  GENRE_UPPERCASE,
  MOVIE_URL_UPPERCASE,
  RUNTIME,
  GENRES,
  MOVIE_ID_UPPERCASE,
} from '../../redux/reducers/constants';

/**
 * @param {string} label label on input
 * @return {Element} inputs in the edit form
 */
function Input({label, placeholder, value, error, handleInputChange}) {
  const inputLabel = useMemo(() =>
    label == 'poster_path' ?
      MOVIE_URL_UPPERCASE :
      label == 'genre' ?
        GENRE_UPPERCASE :
        label == 'id' ?
          MOVIE_ID_UPPERCASE :
          label.replace('_', ' ').toUpperCase(), [label]);

  return (
    <StyledInput>
      {value || label != 'id' ? <label>{inputLabel}</label> : null}
      {label == GENRES ?
        <CheckboxSelector /> :
        label == 'id' ?
          <p>{value}</p> :
          <input
            type={label == RELEASE_DATE ? 'date' : label == RUNTIME ? 'number' : 'text'}
            value={value}
            onChange={(event) => handleInputChange(event.target.value, label)}
            placeholder={placeholder}
          />
      }
      <span>{error}</span>
    </StyledInput>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.object,
  error: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleInputChange: (value, label) => dispatch(handleInputChange(value, label)),
  };
}

export default connect(null, mapDispatchToProps)(Input);

