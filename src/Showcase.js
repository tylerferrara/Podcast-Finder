import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Showcase.css';

const Showcase = ({age, story, selected}) => {
  return (
    <div className="Showcase center">
      <h1>showcase</h1>
      <h3>selections</h3>
      <ul>
        <li>{age}</li>
        <li>{story}</li>
        <li>{selected}</li>
      </ul>
      <Link to="survey">Take it again!</Link>
    </div>
  );
}

const mapStateToProps = function(store) {
  return {
    age: store.age,
    story: store.story,
    selected: store.selectedCat
  };
};

export default connect(mapStateToProps, null)(Showcase);
