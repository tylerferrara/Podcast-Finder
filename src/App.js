import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Landing from './Landing';
import Survey from './survey/Survey';
import Showcase from './showcase/Showcase';
import Error from './Error';
import Menu from './Menu';
import New from './new/New';
import Info from './info/Info';
import Trending from './trending/Trending';

class App extends Component {
  state = {
    showMenu: false
  }
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  render() {
    return (
      <MuiThemeProvider className="App">
        <div className="container">
          <Menu showMenu={this.state.showMenu} hideMenu={() => this.toggleMenu()}/>
          <AppBar
            onLeftIconButtonTouchTap={this.toggleMenu}
            title={<Link id="title" to='/'>Podcast Finder</Link>}
            style={{boxShadow: 'none'}} />
          <div className="content">
            <Switch>
              <Route exact path='/' component={Landing}/>
              <Route path='/survey' component={Survey}/>
              <Route path='/showcase' component={Showcase}/>
              <Route path='/new' component={New}/>
              <Route path='/info' component={Info}/>
              <Route path='/trending' component={Trending}/>
              <Route path='*' component={Error}/>
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
