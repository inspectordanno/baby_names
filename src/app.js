import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import BabyNameApp from './components/BabyNameApp';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <BabyNameApp />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));