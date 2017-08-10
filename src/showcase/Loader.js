import React from 'react';
import Spinner from 'react-spinner-material';
import './Loader.css';

const Loader = ({isLoading, loaderRemoved}) => {
  console.log('loading LOADER');
  let loadClass = '';
  if(!isLoading) {
    loadClass = 'fadeLoader';
    window.setTimeout(() => {
      console.log('remove this now!!');
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

// const remove = () => {
//   window.setTimeout(() => {
//     console.log('remove this now!!');
//     let el = document.querySelector(".Loader");
//     el.className += 'Loader removeLoader';
//   }, 400)
// }



export default Loader;
