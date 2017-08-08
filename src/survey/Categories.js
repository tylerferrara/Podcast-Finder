import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import { connect } from 'react-redux';
import * as Actions from '../redux/Actions';
import './Categories.css';

class Categories extends Component {
  handleTap = (title) => {
    let newArray;

    if(this.props.selected.indexOf(title) >= 0) {
      newArray = this.props.selected.filter(item => {
        return item !== title;
      })
    } else {
      newArray = this.props.selected.concat(title);
    }
    this.props.setSelectedCategories(newArray);
  }
  showTiles = () => {
    let color;
    const result = this.props.categories.map(tile =>  {
      if(this.props.selected.indexOf(tile.name) >= 0) {
        color = 'rgba(56,142,60,0.9)';
      } else {
        color = 'rgba(0,0,0,0.4)';
      }
      return (
        <GridTile className="tile" titleBackground={color} key={tile.id} title={tile.name} onTouchTap={() => this.handleTap(tile.name)}>
          <img src={'https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png'} alt={tile.name} />
        </GridTile>
      );
    });
    return result;
  }
  render() {
    return (
      <div className="gridContainer">
        <GridList className="gridList" cellHeight={180}>
          <Subheader>Categories</Subheader>
          {this.showTiles()}
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    categories: store.categories,
    selected: store.selectedCat
  };
};

const mapDispatchToProps = {
  setCategories: Actions.setCategories,
  setSelectedCategories: Actions.setSelectedCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
