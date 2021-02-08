import React, {useMemo, useState} from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../../redux/action';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router';

function BindDropDown({values, fetchMovies, searchParam}) {
  const [value, setValue] = useState('0');
  const history = useHistory();
  function handleChange(event) {
    const currentVal = event.target.value;
    setValue(currentVal);
    fetchMovies(searchParam, values[parseInt(currentVal)].name);
  }

  const optionTemplate = useMemo(() => values.map((v) => (
    <option key={v.id} value={v.id}>{v.name}</option>
  )), [values]);

  return (
    <select value={value} onChange={handleChange}>
      {optionTemplate}
    </select>
  );
}

BindDropDown.propTypes = {
  values: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchParam: state.filter.params.search,
});

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchMovies: (searchParam, sortParam) => dispatch(fetchMovies(searchParam, sortParam)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BindDropDown);
