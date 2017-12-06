import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { blue } from '../../theme/variables';

import SideNavList from './SideNav.style';

const activeClassName = 'active';
const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    text-decoration: none;
    background-color: ${blue};
  }
`;


function SideNav({ opened }) {
  return (
    <SideNavList opened={opened}>
      <li><StyledLink exact to="/">Home</StyledLink></li>
      <li><StyledLink exact to="/javascript">JavaScript</StyledLink></li>
      <li><StyledLink exact to="/webpack">Webpack</StyledLink></li>
      <li><StyledLink exact to="/bower">Bower</StyledLink></li>
    </SideNavList>
  );
}

SideNav.propTypes = {
  opened: PropTypes.bool.isRequired,
};

export default SideNav;
