import React from 'react';
import { useRouteError } from "react-router-dom";

import './Main.css';  

import errorGif from '../../../assets/gif/Error.gif';


function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <div id='error-page' >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    
      <div className='footer-block'>
        <img src = {errorGif} alt = "error-gif" />
      </div>
    </div>
  );
}

export default Error;
