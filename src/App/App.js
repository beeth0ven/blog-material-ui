import React, { Component } from 'react';
import {
  AppBar,
  GridList,
  Subheader,
  GridTile,
  RefreshIndicator,
  FlatButton
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
    // const { getArticles } = this.props;
    // getArticles()
  }

  subheader = () => {
    const { error } = this.props;
    if (error) {
      return <Subheader>{`${error}`}</Subheader>;
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
        <div>
          <AppBar title="Beeth0ven's blog"/>
          <FlatButton
            label='Refresh'
            primary={true}
            onClick={this.props.getArticles}
          />
          <div style={styles.root}>
            {this.articlesJSX()}
          </div>
        </div>
    );
  }
}

export default connect(
  (state) => ({...state}),
  (dispatch) => ({
    getArticles: () => dispatch(getArticles())
  })
)(App);
