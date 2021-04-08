import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './Styles/styles.scss'
import './Styles/estilos.css'
import { Provider } from 'react-redux'
import store from './Redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
