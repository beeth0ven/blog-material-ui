import React, { Component } from 'react';
import {
  AppBar,
  Drawer,
  MenuItem,
 } from 'material-ui';
 import { showArticles, showSearch, showMe } from '../actions/router.js';
 import { connect } from 'react-redux';

class CoreLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  onRequestChange = (open) => this.setState({open});
  onCloseDrawer = () => this.setState({open: false});
  onToggleDrawer = () => this.setState({open: !this.state.open});
  onMenuItemClick = (routerAction) => () => {
    this.onCloseDrawer();
    routerAction();
  };

  render() {
    const { showArticles, showSearch, showMe } = this.props;

    return (
        <div>
          <AppBar
            title="Beeth0ven's blog"
            onLeftIconButtonClick={this.onToggleDrawer}
          />
          {this.props.children}
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            onRequestChange={this.onRequestChange}
          >
          <MenuItem onClick={this.onMenuItemClick(showArticles)}>Articles</MenuItem>
          <MenuItem onClick={this.onMenuItemClick(showSearch)}>Search</MenuItem>
          <MenuItem onClick={this.onMenuItemClick(showMe)}>Me</MenuItem>
          </Drawer>
        </div>
    );
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    showArticles: () => dispatch(showArticles()),
    showSearch: () => dispatch(showSearch()),
    showMe: () => dispatch(showMe()),
  })
)(CoreLayout);
