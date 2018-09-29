import React from 'react';
import ReactDOM from 'react-dom';

import data from './data/books';
import topics from './data/topics';

import App from './App';

import 'material-components-web/dist/material-components-web.css';
import './index.css';

ReactDOM.render(<App books={data} topics={topics} />, document.getElementById('root'));
