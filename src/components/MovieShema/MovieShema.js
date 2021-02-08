import * as yup from 'yup';

export const MovieSchema = yup.object().shape({
  title: yup.string().required(),
  release_date: yup.date().required(),
  poster_path: yup.string().url().required(),
  genres: yup.array().required('Select at least one genre to proceed'),
  overview: yup.string().required(),
  runtime: yup.number().positive().integer().required(),
});
