import React from 'react';
import {useToggle} from '../useToggle/useToggle';
import {handleChangeCheckbox} from '../../redux/action';
import {connect} from 'react-redux';
import CheckboxInput from '../CheckboxInput/CheckboxInput';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

function CheckboxSelector({values, handleChangeCheckbox}) {
  const [expanded, setExpanded] = useToggle();

  function optionTemplate(values) {
    return values.map((v) => (
      <li key={v.id}>
        <CheckboxInput value={v} handleChangeCheckbox={handleChangeCheckbox} />{v.value}
      </li>
    ));
  }
  const checkboxClass = classNames('checkboxes',
      {
        'checkboxes-invisible': !expanded,
      });

  return (
    <>
      <div className='selectBox' onClick={() => setExpanded()}>
        <select>
          <option>Select Genre</option>
        </select>
        <div className='overSelect'></div>
      </div>
      <div className={checkboxClass}>
        <ul>
          {optionTemplate(values)}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  values: state.modal.values,
});

function mapDispatchToProps(dispatch) {
  return {
    handleChangeCheckbox: (id) =>
      dispatch(handleChangeCheckbox(id)),
  };
}

CheckboxSelector.propTypes = {
  values: PropTypes.array.isRequired,
  handleChangeCheckbox: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxSelector);
