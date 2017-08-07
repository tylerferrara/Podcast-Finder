import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Landing from './Landing';
import Survey from './survey/Survey';
import Showcase from './Showcase';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        <div className="container">
          <AppBar title={<Link id="title" to='/'>Podcast Finder</Link>} style={{boxShadow: 'none'}} />
          <div className="content">
            <Switch>
              <Route exact path='/' component={Landing}/>
              <Route path='/survey' component={Survey}/>
              <Route path='/showcase' component={Showcase}/>
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
