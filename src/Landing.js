import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import RaisedButton from 'material-ui/RaisedButton';

const Landing = () => {
  return (
    <div className="Landing">
      <h1 className="contained">Take your podcast listening experience to the next level!</h1>
      <Link to='/survey'><RaisedButton label="Start" /></Link>
    </div>
  )
}

export default Landing;
