import { createStore } from 'redux';

const initialState = {
  age: 0,
  story: 0.5,
  selectedCat: [],
  results: [],
  categories: [],
}

function reducer(state = initialState, action={}) {
  switch (action.type) {
    case 'SET_AGE':
      return {
        ...state,
        age: action.age
      }
    case 'SET_STORY':
      return {
        ...state,
        story: action.story
      }
    case 'SET_SELECTED_CATEGORIES':
      return {
        ...state,
        selectedCat: action.selected
      }
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.categories
      }
    case 'CLEAR_VALUES':
      return {
        ...state,
        age: 0,
        story: 0.5,
        selectedCat: [],
        results: []
      }
    case 'SET_RESULTS':
      return {
        ...state,
        results: action.results
      }
    case 'ADD_RESULTS':
      return {
        ...state,
        results: state.results.concat(action.results)
      }
    default:
      return state;
  }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default reducer;
