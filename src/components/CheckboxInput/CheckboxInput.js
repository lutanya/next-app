import React from 'react';
import PropTypes from 'prop-types';
/**
 * @param {string} label label on input
 * @return {Element} inputs in the edit form
 */
export default function CheckboxInput({value, handleChangeCheckbox}) {
  return (
    <input
      id={value.id}
      type='checkbox'
      checked={value.isChecked}
      onChange={(event) => handleChangeCheckbox(event.target.id)}
    />
  );
}

CheckboxInput.propTypes = {
  value: PropTypes.object.isRequired,
  handleChangeCheckbox: PropTypes.func.isRequired,
};
