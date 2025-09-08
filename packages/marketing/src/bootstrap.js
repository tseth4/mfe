import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// Mount function to start app
const mount = (el) => {
  ReactDOM.render(
    <App/>,
    el
  )
}

// If we are in dev call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// Countainer = export mount function
export { mount };