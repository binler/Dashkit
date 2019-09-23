import React from 'react';
import ReactDOM from 'react-dom';

// Theme

import 'assets/css/theme.min.css';
// import 'assets/css/theme-dark.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

import Init from './components';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Init />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
