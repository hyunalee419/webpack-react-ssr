import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'raf/polyfill';

// ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.hydrate(<App data={window.__PRELOADED_STATE__}/>, document.getElementById('root'));
