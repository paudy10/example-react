import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter
} from "react-router-dom";
import 'font-awesome/css/font-awesome.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

const rootNode = document.getElementById('root');

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider >
  </BrowserRouter>
  ,
  rootNode
);



