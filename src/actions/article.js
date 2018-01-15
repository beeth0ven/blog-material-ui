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

export { startLoading, loadSuccess, loadFailed };
