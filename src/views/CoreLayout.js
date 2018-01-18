import React, { Component } from 'react';
import {
  AppBar,
  Drawer,
  MenuItem,
 } from 'material-ui';
import { Link } from 'react-router';

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

  render() {

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
            <Link to='/'>
              <MenuItem onClick={this.onCloseDrawer}>Articles</MenuItem>
            </Link>
            <Link to='/search'>
              <MenuItem onClick={this.onCloseDrawer}>Search</MenuItem>
            </Link>
            <Link to='/me'>
              <MenuItem onClick={this.onCloseDrawer}>Me</MenuItem>
            </Link>
          </Drawer>
        </div>
    );
  }
}

export default CoreLayout;
