import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import asyncComponent from '../AsyncComponent';

// Dynamically imported components
const NewsApp = asyncComponent(() =>
import('../pages/NewsApp/NewsApp').then(module => module.default));

const JS = asyncComponent(() =>
import('../pages/JS/JS').then(module => module.default));

const Webpack = asyncComponent(() =>
import('../pages/Webpack/Webpack').then(module => module.default));

const Bower = asyncComponent(() =>
import('../pages/Bower/Bower').then(module => module.default));

const NotFoundPage = asyncComponent(() =>
import('../pages/NotFoundPage/NotFoundPage').then(module => module.default));

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={props => <NewsApp searchValue="react" />} />
      <Route path="/javascript" render={props => <JS searchValue="javascript" />} />
      <Route path="/webpack" render={props => <Webpack searchValue="webpack" />} />
      <Route path="/bower" render={props => <Bower searchValue="bower" />} />
      <Route path="*" component={NotFoundPage} />
    </Switch>

  </Router>
);

export default AppRouter;
