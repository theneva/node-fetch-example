import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

fetch('http://localhost:2466/colors')
    .then(res => res.json())
    .then(colors => {
      ReactDOM.render(
          <App colors={colors} />,
          document.getElementById('container')
      );
    });
