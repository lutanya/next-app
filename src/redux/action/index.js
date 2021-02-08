import axios from 'axios';
import {
  FETCH_BY_GENRE_SUCCESS,
  FETCH_BY_GENRE_FAILURE,
  FETCH_BY_GENRE_STARTED,
  OPEN_MODAL_BY_TYPE,
  CLOSE_MODAL_BY_TYPE,
  CHANGE_INPUT_VALUE,
  RESET_VALUES,
  CHANGE_CHECKBOX_VALUES,
} from './types';

//filter actions

const API_ROOT="http://localhost:4000";

function populateParamsToUrl(url, params) {
  if (params !== null) {
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  }
}

function fetchMoviesWithParams(url, searchParam, sortParam) {
  console.log("in");
  return dispatch => {
    axios
      .get(url.href)
      .then((res) => {
        console.log("succes");
        dispatch(fetchSuccess(res.data.data, searchParam, sortParam));
      }).catch((err)=>console.log(err))
  };
}

export const fetchMovies = (searchParam, sortParam) => {
  let search = null;
  let sort = null;
  if (searchParam !== null && sortParam !==undefined && searchParam !== 'ALL' ) {
    search = {
      searchBy: 'genres',
      search: searchParam.toLowerCase()
    }
  };
  if (sortParam !== null && sortParam!==undefined) {
    sort = {
      sortBy: sortParam.toLowerCase().replace(' ', '_'),
      sortOrder: 'desc'
    }
  };
  const url = new URL(`${API_ROOT}/movies`);
  populateParamsToUrl(url, search);
  populateParamsToUrl(url, sort);
  return fetchMoviesWithParams(url, searchParam, sortParam)
};

export const searchMovie = (searchParam) => {
  console.log("searchParam",searchParam);
  const url = new URL(`${API_ROOT}/movies/?search=${searchParam}&searchBy=title`);
  console.log("url",url);
  return fetchMoviesWithParams(url)
};

const fetchSuccess = (movies, searchParam, sortParam) => ({
  type: FETCH_BY_GENRE_SUCCESS,
  payload: movies,
  searchParam,
  sortParam
});

const fetchStarted = () => ({
  type: FETCH_BY_GENRE_STARTED,
});

const fetchFailure = (error) => ({
  type: FETCH_BY_GENRE_FAILURE,
  error,
});

//modal actions

export const handleAddMovie = (movie) => {
  const url = new URL('http://localhost:4000/movies');
  return (dispatch) => {
    axios
      .post(url, movie)
      .then((response) => dispatch(addMovieSuccess(response.data)))
      .catch((error) => dispatch(fetchFailure(error.message)));
  };
};

export const handleEditMovie = (movie) => {
  const url = new URL('http://localhost:4000/movies');
  return (dispatch) => {
    axios
      .put(url, movie)
      .then(() => dispatch(closeModal()))
      .catch((error) => dispatch(fetchFailure(error.message)));
  };
};

export const handleDeleteMovie = (movie) => {
  const url = new URL(`http://localhost:4000/movies/${movie.id}`);
  return (dispatch) => {
    axios
      .delete(url)
      .then(() => dispatch(closeModal()))
      .catch((error) => dispatch(fetchFailure(error.message)));
  };
};



export const openModalByType = (type, movie) => ({
  type: OPEN_MODAL_BY_TYPE,
  modalType: type,
  movie: movie !== undefined ?
    {
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      genres: movie.genres,
      overview: movie.overview,
      runtime: Number(movie.runtime),
    } :
    null,
  genres: movie !== undefined ? movie.genres : null,
});

export const closeModal = () => ({
  type: CLOSE_MODAL_BY_TYPE,
});

export const handleInputChange = (value, label) => ({
  type: CHANGE_INPUT_VALUE,
  label: label,
  value: value,
});

export const handleFormReset = () => ({
  type: RESET_VALUES,
});

export const handleChangeCheckbox = (id) => ({
  type: CHANGE_CHECKBOX_VALUES,
  id: id,
});

export const handleFormErrors = (errors) =>
({
  type: 'HANDLE_ERRORS',
  errors: errors,
});

export const addMovieSuccess = () => ({
  type: OPEN_MODAL_BY_TYPE,
  modalType: 'addMovieSuccess',
});


