import React, { Component } from 'react';
import ThemeProvider from './ThemeProvider.js'
import {
  AppBar,
  GridList,
  Subheader,
  GridTile,
  RefreshIndicator
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
  },
  refreshIndicator: {
    display: 'inline-block',
    position: 'relative'
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
    const { error } = this.props;
    if (error) {
      return <Subheader>`${error}`</Subheader>;
    }
    return <Subheader>December</Subheader>;
  }

  articlesJSX = () => {
    const { isLoading, articles } = this.props;
    if (isLoading) {

      return (
        <RefreshIndicator
          size={40}
          left={230}
          top={300}
          status='loading'
          style={styles.refreshIndicator}
        />
      );
    }

    return (
      <GridList
        cellHeight={180}
        style= {styles.gridList}
      >
        {this.subheader()}
        {articles.map(gridCell)}
      </GridList>
    )
  }

  render() {

    return (
      <ThemeProvider>
        <div>
          <AppBar title="Beeth0ven's blog"/>
          <div style={styles.root}>
            {this.articlesJSX()}
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
