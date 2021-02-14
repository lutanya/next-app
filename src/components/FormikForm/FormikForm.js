import React from 'react';
import { StyledButton, StyledResetButton, StyledSubmitButton } from '../Button/StyledButton';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import MovieSchema from '../MovieShema/MovieShema';
import StyledInput from '../Input/StyledInput';
import CheckboxFormik from '../CheckboxFormik/CheckboxFormik';
import PropTypes from 'prop-types';

const fields = [
  { key: 'title', label: 'TITLE', placeholder: 'Select Title', type: 'text' },
  { key: 'release_date', label: 'RELEASE DATE', placeholder: 'Select Date', type: 'date' },
  { key: 'poster_path', label: 'MOVIE URL', placeholder: 'Movie URL here', type: 'text' },
  { key: 'genres', label: 'GENRE', placeholder: 'Select genre' },
  { key: 'overview', label: 'OVERVIEW', placeholder: 'Overview here', type: 'text' },
  { key: 'runtime', label: 'RUNTIME', placeholder: 'Runtime here', type: 'text' },
];

const defaultMovie = {
  id: '',
  title: '',
  release_date: '',
  poster_path: '',
  genres: '',
  overview: '',
  runtime: '',
}

const InputField = (props) => {
  const [
    field,
    { error, touched },
  ] = useField(props);
  return (
    <>
      <input {...field} {...props} />
      {error && touched && <span >{error}</span>}
    </>
  );
};

function formInputs(values) {
  return fields.map((field) => (
    <StyledInput key={field.key}>
      <label key={field.key}>{field.label}</label>
      {
        field.type ?
          <InputField
            type={field.type}
            name={field.key}
            placeholder={field.placeholder}
          /> :
          <>
            <Field values={values} component={CheckboxFormik} />
            <ErrorMessage name={field.key} component="span" />
          </>
      }
    </StyledInput>
  ),
  );
};

const FormikForm = (
  {
    movie,
    submitLable,
    handleFormSubmit,
  },
) => (
  <Formik
    initialValues={movie ?? defaultMovie}

    validationSchema={MovieSchema}

    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        handleFormSubmit(values);
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ values, isSubmitting }) => (
      <Form id='myForm'>
        {
          movie ?
            <>
              <label key="movie_id">MOVIE ID</label>
              <p>{movie.id}</p>
            </> :
            null
        }

        {formInputs(values)}

        <StyledButton
          type="reset"
          empty
          position={StyledResetButton}
        > RESET
        </StyledButton>
        <StyledButton
          type="submit"
          disabled={isSubmitting}
          colored
          position={StyledSubmitButton}
        > {submitLable}
        </StyledButton>
      </Form>
    )}
  </Formik >
);

FormikForm.propTypes = {
  movie: PropTypes.object,
  submitLable: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default FormikForm;
