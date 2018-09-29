import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Sidenav from './components/Sidenav';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Book from './pages/Book';

const App = ({ topics, books }) => (
  <Router>
    <div className="app">
      <Toolbar />

      <Content>
        <Route path="/books" render={() => <Sidenav topics={topics} />} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/books/:topic?" render={props => <Books data={books} {...props} />} />
          <Route path="/books/:topic/:book" render={props => <Book data={books} {...props} />} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Content>

    </div>
  </Router>
);

export default App;
