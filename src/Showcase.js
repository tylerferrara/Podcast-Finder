import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Showcase.css';

 // let deviceWidth = window.innerWidth;

class Showcase extends Component {

  state = {
    loadedCount: 0,
    doneLoading: false
  }

  imgLoaded = () => {
    console.log("one img just got loaded!");
    this.setState({loadedCount: this.state.loadedCount+1});
    if(this.state.loadedCount+1 === this.props.results.length) {
      console.log("we just loaded all of the images! YEEEEEAHH!!!!!");
      this.setState({doneLoading: true});
    }
  }

  showAll = () => {
    let array = [];
    this.props.results.forEach(result => {
      array.push(
        <a key={result.trackId} target="_blank" href={result.collectionViewUrl}>
          <img
            className="artwork"
            src={result.artworkUrl600}
            alt={result.trackCensoredName}
            onLoad={this.imgLoaded}
          />
        </a>
      );
    })
    return array;
  }

  showContent = () => {
    if(this.state.doneLoading) {
      return (
        <div className="showContainer">
          {this.showAll()}
        </div>
      )
    } else {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="Showcase center">
        <div className="showHeader">
          <h2>Try something new</h2>
        </div>
        <div className="showContainer">
          {this.showAll()}
        </div>
        <div className="showFooter">
          <h3>Not happy with the results?</h3>
          <Link to="survey">Take it again!</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    results: store.results,
  };
};

export default connect(mapStateToProps, null)(Showcase);
