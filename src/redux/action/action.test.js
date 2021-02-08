import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './index'
import * as types from './types'
import axios from 'axios'

jest.mock('axios');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({})

const data = {
    data: {
      data: [1, 2, 3]
    }
  };
describe('FilterActions', () => { 

    describe('async actions', () => {    
        beforeEach(() => { 
            store.clearActions();
        });
      it('creates FETCH_BY_GENRE_SUCCESS when fetching movies has been done', async () => {    
       
          axios.get.mockImplementationOnce(() => Promise.resolve(data));      
        
        const expectedActions = [
          {
            type: types.FETCH_BY_GENRE_STARTED,
          },
          {
            type: types.FETCH_BY_GENRE_SUCCESS,
            payload: [1, 2, 3], 
            searchParam: null,
            sortParam: null
          },
        ]            
  
        await store.dispatch(await actions.fetchMovies(null,null));
        expect(store.getActions()).toEqual(expectedActions);
       
      })

      it('creates FETCH_BY_GENRE_SUCCESS when fetching movies has been done', async () => {
       
          axios.get.mockImplementationOnce(() => Promise.resolve(data)); 

        const expectedActions = [
          {
            type: types.FETCH_BY_GENRE_STARTED,
          },
          {
            type: types.FETCH_BY_GENRE_SUCCESS,
            payload: [1, 2, 3], 
            searchParam: undefined,
            sortParam: undefined
          },
        ]            
  
        await store.dispatch(await actions.searchMovie("StarWar"));
        expect(store.getActions()).toEqual(expectedActions);
       
      })    

    })   

  })

it('closeModal(): should create an action to set loading to true', () => {
    const expectedAction = {
      type: types.CLOSE_MODAL_BY_TYPE,
    }
    expect(actions.closeModal()).toEqual(expectedAction)
  })
