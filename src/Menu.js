import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    console.log(this.props.showMenu);
    let extraClass = '';
    if(this.props.showMenu) {
      extraClass = 'showMenu'
    }
    return (
      <div className={"Menu " + extraClass}>

      </div>
    )
  }
}

export default Menu;
