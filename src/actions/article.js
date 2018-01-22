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

const loadTilesDate = () => new Promise((resolve, reject) =>
  setTimeout(() => resolve(tilesData), 2000)
  // setTimeout(() => reject(new Error('auth error!')), 2000)
);

const shouldLoadArticles = (state) => !state.article.isLoading;

const getArticles = () => async (dispatch, getState) => {
    if (shouldLoadArticles(getState())) {
      dispatch(startLoading());
      try {
        const data = await loadTilesDate();
        dispatch(loadSuccess(data))
      } catch (error) {
        dispatch(loadFailed(error));
      }
    };
};

export { startLoading, loadSuccess, loadFailed, getArticles };
