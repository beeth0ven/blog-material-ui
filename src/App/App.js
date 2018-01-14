import React, { Component } from 'react';
import ThemeProvider from './ThemeProvider.js'
import {
  AppBar,
  GridList,
  Subheader,
  GridTile
 } from 'material-ui';
import {connect} from 'react-redux';

const styles = {
  root: {
    // margin: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyaContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 450,
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

const App = ({articles}) => {

  return (
    <ThemeProvider>
      <div>
        <AppBar title="Beeth0ven's blog"/>
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style= {styles.gridList}
          >
            <Subheader>December</Subheader>
            {articles.map(gridCell)}
          </GridList>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default connect(
  (state) => ({...state})
)(App);