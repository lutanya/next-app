import * as types from '../action/types'
import filter, { initialState } from './filter'

describe('filter reducer', () => {

    it('should return the initial state', () => {
        expect(filter(undefined, {})).toEqual(initialState)
      })

    it('FETCH_BY_GENRE_STARTED', () => {
       
        const action = {
            type: types.FETCH_BY_GENRE_STARTED,
        }

        expect(filter(initialState, action)).toEqual({
            ...initialState,
            loading: true,
        })
    })

    it('FETCH_BY_GENRE_SUCCESS', () => {
        const initialState = { 
            movies: [],
            loading: true, 
            error: null,
          }

        const action = {
            type: types.FETCH_BY_GENRE_SUCCESS,
            payload: [1, 2, 3],
            searchParam: null,
            sortParam: null
        }

        expect(filter(initialState, action)).toEqual({
            ...initialState,
            loading: false,
            error: null,
            movies: action.payload,
            params: {
                search: action.searchParam,
                sort: action.sortParam,
            }
        })
    })

    it('FETCH_BY_GENRE_STARTED after error', () => {
        const initialStateWithError = {
            data: null,
            loading: true,
            error: 'Unknown error',
          }

        const action = {
            type: types.FETCH_BY_GENRE_SUCCESS,
            payload: [1, 2, 3],
            searchParam: null,
            sortParam: null
        }

        expect(filter(initialStateWithError, action)).toEqual({
            ...initialStateWithError,
            loading: false,
            error: null,
            movies: action.payload,
            params: {
                search: action.searchParam,
                sort: action.sortParam,
            }
        })
    })

    it('FETCH_BY_GENRE_FAILURE', () => {
        const initialState = {
            data: null,
            loading: true,
            error: 'Unknown error',
          }

        const action = {
            type: types.FETCH_BY_GENRE_FAILURE,
            error: "New error"
        }

        expect(filter(initialState, action)).toEqual({
            ...initialState,
            loading: false,
            error: action.error
        })
    })

})

