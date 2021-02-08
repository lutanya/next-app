import {
  OPEN_MODAL_BY_TYPE,
  CLOSE_MODAL_BY_TYPE,
  CHANGE_INPUT_VALUE,
  RESET_VALUES,
  CHANGE_CHECKBOX_VALUES,
} from '../action/types';

import {
  TITLE,
  RELEASE_DATE,
  OVERVIEW,
  RUNTIME,
  POSTER_PATH,
} from './constants';

const initialState = {
  show: false,
  modalType: '',
  movie: {
    id: '',
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: '',
  },
  values: [
    {id: 1, value: 'Animation', isChecked: false},
    {id: 2, value: 'Adventure', isChecked: false},
    {id: 3, value: 'Family', isChecked: false},
    {id: 4, value: 'Comedy', isChecked: false},
    {id: 5, value: 'Romance', isChecked: false},
    {id: 6, value: 'Drama', isChecked: false},
    {id: 7, value: 'Fantasy', isChecked: false},
  ],
  errors: [],
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL_BY_TYPE:
      const movie = action.movie == null ? state.movie : action.movie;
      const values = action.genres == null ? state.values :
        state.values.map((v) => ({...v, isChecked: action.genres.includes(v.value)}));
      return {
        ...state,
        show: true,
        modalType: action.modalType,
        movie: movie,
        values: values,
      };
    case CLOSE_MODAL_BY_TYPE:
      return {
        ...state,
        show: false,
        type: '',
        errors: [],
      };
    case CHANGE_INPUT_VALUE:
      switch (action.label) {
        case TITLE:
          return {
            ...state,
            movie: {
              ...state.movie,
              title: action.value,
            },
          };
        case POSTER_PATH:
          return {
            ...state,
            movie: {
              ...state.movie,
              poster_path: action.value,
            },
          };
        case RELEASE_DATE:
          return {
            ...state,
            movie: {
              ...state.movie,
              release_date: action.value,
            },
          };
        case OVERVIEW:
          return {
            ...state,
            movie: {
              ...state.movie,
              overview: action.value,
            },
          };
        case RUNTIME:
          return {
            ...state,
            movie: {
              ...state.movie,
              runtime: Number(action.value),
            },
          };
      };
    case RESET_VALUES:
      const next = state.values.map((v) => ({...v, isChecked: false}));
      return {
        ...state,
        movie: {
          ...state.movie,
          title: '',
          release_date: '',
          poster_path: '',
          genres: [],
          overview: '',
          runtime: '',
        },
        values: next,
      };
    case CHANGE_CHECKBOX_VALUES:
      const toggleValue = state.values.find((v) => v.id == action.id);
      const nextGenre = toggleValue.isChecked ?
        state.movie.genres.filter((genre) => toggleValue.value != genre) :
        [...state.movie.genres, toggleValue.value];
      return {
        ...state,
        values: state.values.map((v) =>
          ({...v, isChecked: v.id == action.id ? !v.isChecked : v.isChecked})),
        movie: {
          ...state.movie,
          genres: nextGenre,
        },
        errors: [{...state.errors, genres: ''}],
      };
    case 'HANDLE_ERRORS':
      return {
        ...state,
        errors: action.errors,
      };
    default: return state;
  }
};
