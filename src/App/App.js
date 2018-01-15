import React, { Component } from 'react';
import ThemeProvider from './ThemeProvider.js'
import {
  AppBar,
  GridList,
  Subheader,
  GridTile
 } from 'material-ui';
import {connect} from 'react-redux';
import {getArticles} from '../actions/article.js';

const styles = {
  root: {
    // margin: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyaContent: 'space-around'
  },
  gridList: {
    width: 500,
    // height: 450,
    overflowY: 'auto',
  }
}

const gridCell = (article) => (
  <GridTile
    key={article.title}
    title={article.title}
    subtitle={<span>by <b>{article.author}</b></span>}
  >
    <img src={article.img} />
  </GridTile>
)

class App extends Component {

  componentDidMount() {
    const { fetchArticle } = this.props;
    fetchArticle()
  }

  subheader = () => {
    const { isLoading, error } = this.props;
    if (isLoading) {
      return 'Loading...';
    }
    if (error) {
      return `${error}`;
    }
    return 'December';
  }

  render() {

    const { articles } = this.props;

    return (
      <ThemeProvider>
        <div>
          <AppBar title="Beeth0ven's blog"/>
          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style= {styles.gridList}
            >
              <Subheader>{this.subheader()}</Subheader>
              {articles.map(gridCell)}
            </GridList>
          </div>
        </div>
      </ThemeProvider>
    );

  }
}

export default connect(
  (state) => ({...state}),
  (dispatch) => ({
    fetchArticle: () => getArticles(dispatch)
  })
)(App);
