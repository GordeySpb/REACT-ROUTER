import { Component } from 'react';
import PropTypes from 'prop-types';

class Logout extends Component {
  componentWillMount() {
    const { onLogout } = this.props;
    onLogout();
  }

  render() {
    return null;
  }
}

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Logout;
