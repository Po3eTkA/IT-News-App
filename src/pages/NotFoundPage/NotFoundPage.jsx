import React from 'react';
import { NavLink } from 'react-router-dom';

import NotFoundPageWrapper from './NotFoundPage.style';

const NotFoundPage = () => (
  <NotFoundPageWrapper>
    <h1>404</h1>
    <p>Page not found</p>
    <NavLink to="/" className="btn">Go home</NavLink>
  </NotFoundPageWrapper>
);

export default NotFoundPage;
