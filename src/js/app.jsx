import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import Dashboard from './containers/dashboard/index';
import styles from './../styles.scss';

const store = createStore(allReducers);
ReactDOM.render(
	<Provider store={store}>
		<Dashboard />
	</Provider>
	, document.getElementById('app'),
);
