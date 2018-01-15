import tilesData from './tilesData.js'



const empty = {
  isLoading: false,
  articles: tilesData,
  error: null
};

const article = (state = empty, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case 'LOAD_SUCCESS':
      return {
        isLoading: false,
        articles: action.data,
        error: null
      }
    case 'LOAD_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export { article };
