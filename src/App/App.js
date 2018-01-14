import React, { Component } from 'react';
import ThemeProvider from './ThemeProvider.js'
import {
  AppBar,
  GridList,
  Subheader,
  GridTile
 } from 'material-ui';
import tilesData from './tilesData.js';

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

const gridCell = (data) => (
  <GridTile
    key={data.title}
    title={data.title}
    subtitle={<span>by <b>{data.author}</b></span>}
  >
    <img src={data.img} />
  </GridTile>
)

const App = () => {

  console.log('App.render.hiaaa');

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
            {tilesData.map(gridCell)}
          </GridList>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
