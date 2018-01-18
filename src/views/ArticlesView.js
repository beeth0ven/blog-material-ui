import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getArticles} from '../actions/article.js';
import {
  GridList,
  Subheader,
  GridTile,
  RefreshIndicator,
  FlatButton
 } from 'material-ui';

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

const ArticlesView = ({
  isLoading,
  articles,
  error,
  getArticles
}) => {

const subheader = () => {
  if (error) {
    return <Subheader>{`${error}`}</Subheader>;
  }
  return <Subheader>December</Subheader>;
}

const articlesJSX = () => {
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
        {subheader()}
        {articles.map(gridCell)}
      </GridList>
    )
  };

  return (
    <div>
      <FlatButton
        label='Refresh'
        primary={true}
        onClick={getArticles}
      />
      <div style={styles.root}>
        {articlesJSX()}
      </div>
    </div>
  )
}


export default connect(
  (state) => ({...state.article}),
  (dispatch) => ({
    getArticles: () => dispatch(getArticles())
  })
)(ArticlesView);
