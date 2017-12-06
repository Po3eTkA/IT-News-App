import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchForm from '../SearchForm/SearchForm';
import SideNav from '../SideNav/SideNav';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import { Container } from '../../theme/grid';
import { H1, MainHeader } from './Header.style';

import { setOpenMenu } from '../../actions';

function Header({ toggleOpenMenu, openNav, searchValue }) {
  return (
    <MainHeader>
      <Navigation />
      <BurgerMenu opened={toggleOpenMenu} openNav={openNav} />
      <SideNav opened={toggleOpenMenu} />
      <Container>
        <H1>NEWSAPP</H1>
        <SearchForm />
      </Container>
    </MainHeader>
  );
}

Header.propTypes = {
  searchValue: PropTypes.string.isRequired,
  toggleOpenMenu: PropTypes.bool.isRequired,
  openNav: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    searchValue: state.keywords.searchValue,
    toggleOpenMenu: state.keywords.toggleOpenMenu,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openNav: (toggleOpenMenu) => dispatch(setOpenMenu(toggleOpenMenu)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
