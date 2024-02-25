import React from 'react';
import App from './../app.jsx';

import Home from './../pages/home/home.js';
import Error from './../pages/error/error.js';

const AppRoute = [
  {
    path: '*', 
    element: <App />,
    children: [
    	{ path: '', element: <Home /> },
    	{ path: '*', element: <Error /> }
		]
  }
];


export default AppRoute;