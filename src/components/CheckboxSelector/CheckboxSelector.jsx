import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import useToggle from '../useToggle/useToggle';
import { handleChangeCheckbox } from '../../redux/action';
import CheckboxInput from '../CheckboxInput/CheckboxInput';
import styles from './CheckboxSelector.module.css';

function CheckboxSelector({ values, handleChangeCheckbox }) {
  const [expanded, setExpanded] = useToggle();

  function optionTemplate(values) {
    return values.map((v) => (
      <li key={v.id}>
        <CheckboxInput value={v} handleChangeCheckbox={handleChangeCheckbox} />
        {v.value}
      </li>
    ));
  }
  const checkboxClass = classNames(styles.checkboxes,
    {
      checkboxes_invisible: !expanded,
    });

  return (
    <>
      <div className={styles.selectBox} onClick={() => setExpanded()}>
        <select>
          <option>Select Genre</option>
        </select>
        <div className={styles.overSelect} />
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
    handleChangeCheckbox: (id) => dispatch(handleChangeCheckbox(id)),
  };
}

CheckboxSelector.propTypes = {
  values: PropTypes.array.isRequired,
  handleChangeCheckbox: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxSelector);
