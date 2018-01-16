import _ from 'rxjs';
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

const getArticlesEpic = (action$, store) =>
  action$.ofType('START_LOADING')
    .delay(2000)
    .map(() => loadSuccess(tilesData));

export { startLoading, loadSuccess, loadFailed, getArticlesEpic };
