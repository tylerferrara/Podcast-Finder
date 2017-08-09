import React from 'react';
import './Error.css';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="errorContainer contained">
      <div className="errorText">
        <h1>Oops!</h1>
        <p>We seemed to have screwed up...</p>
          <Link to='/'>
            <FlatButton label="Back" secondary={true} />
          </Link>
      </div>
      <img className="noSoup" src="https://media.giphy.com/media/3xz2BtrwQ2wIBeciAw/giphy.gif" alt=""/>
    </div>
  )
}

export default Error;
