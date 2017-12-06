import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import store from './store';
import AppRouter from './appRouter';

import './theme/globalStyle';

const renderApp = Component => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
};

renderApp(AppRouter);

if (module.hot) {
  module.hot.accept(AppRouter, () => {
    renderApp(AppRouter);
  });
}
