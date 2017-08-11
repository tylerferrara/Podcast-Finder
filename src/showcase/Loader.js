import React from 'react';
import Spinner from 'react-spinner-material';
import './Loader.css';

const Loader = ({isLoading, loaderRemoved}) => {
  let loadClass = '';
  if(!isLoading) {
    loadClass = 'fadeLoader';
    window.setTimeout(() => {
      let el = document.querySelector(".Loader");
      el.className += 'Loader removeLoader';
      loaderRemoved();
    }, 400)
  }
  return (
    <div className={"Loader " + loadClass}>
      <Spinner
        size={120}
        spinnerColor={"#00BCD4"}
        spinnerWidth={5}
        visible={true}
      />
    </div>
  )
}

export default Loader;
