import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from 'serviceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import ScrollTop from 'lib/useScrollTop';
import {SkeletonTheme} from 'react-loading-skeleton';

// utils
import {store} from 'store';
import Routes from 'routes';

// icon
import 'utils/locales/i18n';

// css
import 'styles/layout.scss';
import 'react-loading-skeleton/dist/skeleton.css';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <SkeletonTheme baseColor='#91EAE4' highlightColor='#f5f5f5'>
      <BrowserRouter>
        <ScrollTop />
        <Routes />
      </BrowserRouter>
    </SkeletonTheme>
  </Provider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();