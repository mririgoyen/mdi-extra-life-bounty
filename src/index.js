import 'typeface-poppins';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import Background from './Background';
import Content from './Content';
import * as serviceWorker from './serviceWorker';

import './index.css';

ReactGA.initialize('UA-38360741-2');
window.addEventListener('error', (event) => {
  ReactGA.exception({
    description: event.message,
    fatal: false
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
