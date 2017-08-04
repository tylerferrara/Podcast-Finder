import { createStore } from 'redux';

const initialState = {
  age: 0,
  story: 0.5,
  categories: [
    {
      title: 'Tech',
      desc: 'The internet is a big place',
      img: 'https://image.freepik.com/free-vector/multimedia-technology-flat-icons_23-2147490978.jpg'
    },
    {
      title: 'Sports',
      desc: 'Get the inside scoop of your favorite sport',
      img: 'https://yt3.ggpht.com/onI7jrH8ZWTnfJgXzGHnfRIuwMZqN0GctBWnsqnSS9ZeIgSed8K2H6sZYW_DQnQs6nyedKk3jl8cvOX-e1I=s900-nd-c-c0xffffffff-rj-k-no'
    },
    {
      title: 'Cooking',
      desc: 'What can I make next?',
      img: 'https://thumbs.dreamstime.com/z/plate-spoon-fork-icon-symbol-elements-design-41054452.jpg'
    },
    {
      title: 'Mind',
      desc: 'Have you ever thought about thinking more?',
      img: 'https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX12184989.jpg'
    },
    {
      title: 'Education',
      desc: 'Learn random things that seem important',
      img: 'https://s3.envato.com/files/111984381/pv_590.jpg'
    },
    {
      title: 'Comody',
      desc: 'If you have a sense of humor...',
      img: 'https://image.freepik.com/free-vector/retro-microphone-illustration_23-2147500433.jpg'
    }
  ],
  selectedCat: []
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
    case 'SET_CATEGORIES':
      return {
        ...state,
        selectedCat: action.categories
      }
    case 'CLEAR_VALUES':
      return {
        ...state,
        age: 0,
        story: 0.5,
        selectedCat: []
      }
    default:
      return state;
  }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default reducer;
