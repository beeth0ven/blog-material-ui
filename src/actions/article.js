import tilesData from '../../tilesData.js'

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

const getArticles = (dispatch) => {
  dispatch(startLoading());
  setTimeout(() => dispatch(loadSuccess(tilesData)), 2000)
};

export { startLoading, loadSuccess, loadFailed, getArticles };
