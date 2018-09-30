import React from 'react';
import {
  Route, Switch, withRouter,
} from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Sidenav from './components/Sidenav';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';
import Book from './pages/Book';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(user) {
    const { history } = this.props;
    this.setState({ user }, () => history.push('/books'));
  }

  logout() {
    const { history } = this.props;
    this.setState({ user: null }, () => history.push('/'));
  }

  render() {
    const { topics, books } = this.props;
    const { user } = this.state;
    return (
      <div className="app">
        <Toolbar user={user} />

        <Content>
          <Route path="/books" render={() => <Sidenav topics={topics} />} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" render={() => <Login onLogin={this.login} />} />
            <Route path="/logout" render={() => <Logout onLogout={this.logout} />} />
            <PrivateRoute exact path="/books/:topic?" user={user} component={Books} data={books} />
            <PrivateRoute path="/books/:topic/:book" user={user} component={Book} data={books} />
            <Route component={NotFound} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default withRouter(App);
