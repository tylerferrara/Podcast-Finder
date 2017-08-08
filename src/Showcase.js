import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Showcase.css';

class Showcase extends Component {
  showAll = () => {
    let array = [];
    this.props.results.forEach(result => {
      array.push(
        <a key={result.trackCensoredName} target="_blank" href={result.collectionViewUrl}>
          <img className="artwork" src={result.artworkUrl600} alt={result.trackCensoredName}/>
        </a>
      );
    })
    return array;
  }

  // imageLoad = () => {
  //   let images = document.querySelectorAll("img.artwork");
  //   images.forEach(function(image){
  //     if(image.loaded == false){
  //       return null;
  //     } else{
  //
  //     }
  //
  //   })
  //   console.log(images);
  // }

  render() {
    return (
      <div className="Showcase center">
        <div className={"showContainer "}>
          {this.showAll()}
        </div>
        <Link to="survey">Take it again!</Link>
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
