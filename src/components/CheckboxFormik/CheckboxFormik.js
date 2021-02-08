import React from 'react';
//import '../CheckboxSelector/CheckboxSelector.css';
import {useToggle} from '../useToggle/useToggle';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import {Field, FieldArray} from 'formik';

const allGenres = ['Animation', 'Adventure', 'Family', 'Comedy', 'Romance', 'Drama', 'Fantasy'];

export default function CheckboxFormik({values}) {
  const [expanded, setExpanded] = useToggle();

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
        <FieldArray
          name="genres"
          render={(arrayHelpers) => (
            <ul>
              {allGenres.map((genre) => (
                <li key={genre}>
                  <Field
                    name="genres"
                    type="checkbox"
                    value={genre}
                    checked={values.genres.includes(genre)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        arrayHelpers.push(genre);
                      } else {
                        const idx = values.genres.indexOf(genre);
                        arrayHelpers.remove(idx);
                      }
                    }}
                  />{genre}
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    </>
  );
}


CheckboxFormik.propTypes = {
  values: PropTypes.array.isRequired,
};

