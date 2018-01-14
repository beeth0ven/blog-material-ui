import tilesData from './tilesData.js'

const startLoading = () => ({
  type: 'START_LOADING'
});

const loadSuccess = (data) => ({
  type: 'LOAD_SUCCESS',
  data
});

const loadFailed = (error) => ({
  type: 'LOAD_FAILED',
  error
});

const empty = {
  isLoading: false,
  articles: tilesData,
  error: null
};

const article = (state = empty, action) => {
  console.log('article action:', action);
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

export default article;
