import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/Modal';
import configureStore from './store/store'
import jwtFetch from './store/jwt';
import * as sessionActions from './store/session';

function Root() {
  const store = configureStore();

  if (process.env.NODE_ENV !== "production") {
    window.store = store;
    window.jwtFetch = jwtFetch;
    window.sessionActions = sessionActions;
  }
  
  return (
    <ModalProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
    </ModalProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
