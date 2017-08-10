import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <div className="infoContainer center">
          <div className="infoAuthor">
            <h1>Meet the Author:</h1>
            <h2>Tyler Ferrara / tylerferrara123@gmail.com</h2>
          </div>
          <div className="infoApi">
            <h1>What powers this site:</h1>
            <h2>It's no suprize that <a href="https://www.audiosear.ch/">Audiosear.ch</a> is the best api for podcsts. Checkout this <a href="https://www.theverge.com/tldr/2017/4/26/15436014/audiosearch-podcast-search-engine">Verge article</a> about why they rank supreme.</h2>
          </div>
          <div className="infoFork">
            <h1>Open source:</h1>
            <h2><a href="https://github.com/tylerferrara/Podcast-Finder">Fork on github</a>, and don't be afraid to recommend changes. We welcome pull requests!</h2>
          </div>
          <div className="infoMaterial">
            <h1>Material-UI:</h1>
            <h2>What made this app beautiful. Checkout <a href="http://www.material-ui.com/#/">the docs</a>.</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Info;
