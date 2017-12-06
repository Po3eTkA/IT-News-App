import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { blue } from '../../theme/variables';

import { Container } from '../../theme/grid';
import Nav from './Navigation.style';

const activeClassName = 'active';
const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    color: ${blue};
  }
`;


class Navigation extends Component {
  state = {
    fixed: false,
  }
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const pageOffset = window.pageYOffset;
    if (pageOffset > 400) {
      this.setState({ fixed: true });
    } else {
      this.setState({ fixed: false });
    }
  }
  render() {
    return (
      <Nav fixed={this.state.fixed}>
        <Container>
          <ul role="navigation">
            <li><StyledLink exact to="/">Home</StyledLink></li>
            <li><StyledLink exact to="/javascript">JavaScript</StyledLink></li>
            <li><StyledLink exact to="/webpack">Webpack</StyledLink></li>
            <li><StyledLink exact to="/bower">Bower</StyledLink></li>
          </ul>
        </Container>
      </Nav>
    );
  }
}

export default Navigation;
