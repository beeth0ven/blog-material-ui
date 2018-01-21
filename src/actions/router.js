import { push } from 'react-router-redux';

const showArticles = () => push('/');
const showSearch = () => push('/search');
const showMe = () => push('/me');

export { showArticles, showSearch, showMe };
