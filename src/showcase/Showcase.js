import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Showcase.css';
import Img from 'react-image'
import Loader from './Loader';
import Error from '../Error';


class Showcase extends Component {

  state = {
    loadedCount: 0,
    isLoading: true,
    removeLoader: false,
    contentClass: 'hidden'
  }

  imgLoaded = () => {
    console.log("one img just got loaded!");
    this.setState({loadedCount: this.state.loadedCount+1});
    if(this.state.loadedCount+1 >= this.props.results.length) {
      console.log("we just loaded all of the images! YEEEEEAHH!!!!!");
      this.setState({isLoading: false});

    }
  }

  images = () => {
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
    return array
  }

  showContent = () => {
    console.log("we can display the content now!!!");
    this.setState({contentClass: 'fadeIn', removeLoader: true});
  }

  renderLoader = () => {
    if(!this.state.removeLoader) {
      return <Loader isLoading={this.state.isLoading} loaderRemoved={() => this.showContent()}/>
    }
  }

  podcastsToRender = () => {
    if(this.props.results.length === 0) {
      return (
        <Error />
      )
    } else {
      return (
        <div>
          {this.renderLoader()}
          <div className={this.state.contentClass}>
            <div className="showHeader">
              <h1>Try something new</h1>
            </div>
            <div className="showContainer">
              {this.images()}
            </div>
            <div className="showFooter">
              <h3>Not happy with the results?</h3>
              <Link to="survey">Redo!</Link>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
{this.renderLoader()}
    return (
      <div className="Showcase center">
        {this.podcastsToRender()}
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
