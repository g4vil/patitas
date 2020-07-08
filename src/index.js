import React from 'react';
import ReactDOM from 'react-dom';
//Se encarga de encapsular nuestra aplicacion y pasar el estado
import { Provider } from 'react-redux'
//Funcion que se encarga de crear el estado
import { createStore } from 'redux'
import reducer from './reducers'
import App from './routes/App';

const initialState = {}
const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('app')
);