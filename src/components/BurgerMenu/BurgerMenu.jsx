import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HamburgeMenu from './BurgerMenu.style';

class BurgerMenu extends Component {
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
      <HamburgeMenu
        opened={this.props.opened}
        fixed={this.state.fixed}
        href="/"
        onClick={(e) => {
          e.preventDefault();
          return this.props.openNav(this.props.opened);
        }}
      > ...
      </HamburgeMenu>
    );
  }
}

BurgerMenu.propTypes = {
  opened: PropTypes.bool.isRequired,
  openNav: PropTypes.func.isRequired,
};

export default BurgerMenu;
