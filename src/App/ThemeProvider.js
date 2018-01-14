import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

export default class ThemeProvider extends Component {

  render() {
    return (
       <MuiThemeProvider>
         {this.props.children}
       </MuiThemeProvider>
    )
  }
}
