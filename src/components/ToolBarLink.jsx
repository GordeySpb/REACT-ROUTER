import React from 'react';
import { NavLink } from 'react-router-dom';


const ToolbarLink = ({ children, ...rest }) => <NavLink activeClassName="mdc-tab--active" {...rest}>{children}</NavLink>;

export default ToolbarLink;
