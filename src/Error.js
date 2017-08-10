import React from 'react';
import './Error.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="Error">
      <div className="errorContainer center">
        <div className="errorText">
          <h1>Oops!</h1>
          <p>We seemed to have screwed up...</p>
            <Link to='/'>
              <RaisedButton label="Back" secondary={true} />
            </Link>
        </div>
        <img className="noSoup" src="https://media.giphy.com/media/3xz2BtrwQ2wIBeciAw/giphy.gif" alt=""/>
      </div>
    </div>
  )
}

export default Error;
