import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import Explore from 'material-ui/svg-icons/action/explore';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import FiberNew from 'material-ui/svg-icons/av/fiber-new';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';



class Menu extends Component {
  state = {
    close: '#999999',
    explore: '#606060',
    new: '#606060',
    trending: '#606060',
    info: '#606060',
  }
  changeColor = (item, isEnter) => {
    let newColor
    switch (item) {
      case 'close':
        newColor = isEnter ? 'rgb(119, 119, 119)' : '#999999';
        this.setState({close: newColor});
        break;
      case 'explore':
        newColor = isEnter ? 'rgb(16, 133, 244)' : '#606060';
        this.setState({explore: newColor});
        break;
      case 'new':
        newColor = isEnter ? 'rgb(16, 133, 244)' : '#606060';
        this.setState({new: newColor});
        break;
      case 'trending':
        newColor = isEnter ? 'rgb(16, 133, 244)' : '#606060';
        this.setState({trending: newColor});
        break;
      case 'info':
        newColor = isEnter ? 'rgb(16, 133, 244)' : '#606060';
        this.setState({info: newColor});
        break;
      default:
        console.log("Did not find " + item + " that matched a state value");
    }
  }
  render() {
    let slideClass = '';
    let shadowClass = '';
    if(this.props.showMenu) {
      slideClass = 'showMenu';
      shadowClass = 'showShadow';
    }
    return (
      <div className="Menu ">
        <div className={"slider "  + slideClass} >
          <div className="sliderContainer">
            <div className="closeBtn" >
              <IconButton
                onTouchTap={this.props.hideMenu}
                onMouseEnter={() => this.changeColor('close', true)}
                onMouseLeave={() => this.changeColor('close', false)}
                iconStyle={{width: '30px', height: '30px', color: this.state.close}}>
                <Close />
              </IconButton>
            </div>
            <h2 className="menuTitle">Podcast Finder</h2>
            <div className="actions section">
              <Link className="menuLink"
                onTouchTap={this.props.hideMenu}
                to='/survey'
                onMouseEnter={() => this.changeColor('explore', true)}
                onMouseLeave={() => this.changeColor('explore', false)}>
                  <Explore color={this.state.explore}/> <p>Explore</p>
              </Link>
              <Link className="menuLink"
                onTouchTap={this.props.hideMenu}
                to='/new'
                onMouseEnter={() => this.changeColor('new', true)}
                onMouseLeave={() => this.changeColor('new', false)}>
                <FiberNew color={this.state.new}/> <p>New</p>
              </Link>
              <Link className="menuLink"
                onTouchTap={this.props.hideMenu}
                to='/trending'
                onMouseEnter={() => this.changeColor('trending', true)}
                onMouseLeave={() => this.changeColor('trending', false)}>
                  <TrendingUp color={this.state.trending}/> <p>Trending</p>
              </Link>
            </div>
            <div className="details section">
              <Link className="menuLink"
                onTouchTap={this.props.hideMenu}
                to='/info'
                onMouseEnter={() => this.changeColor('info', true)}
                onMouseLeave={() => this.changeColor('info', false)}>
                <InfoOutline color={this.state.info}/> <p>Info</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={"shadow " + shadowClass} >
        </div>
      </div>
    )
  }
}

export default Menu;
