require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';

var Provider = require('react-redux').Provider;
var store = require('./store');

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
					<Provider store={store}>
					<CheeseList /> 
					</Provider>, document.getElementById('app'));
});
