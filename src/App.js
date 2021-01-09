import React from 'react';
import './App.css';

import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';

import { Provider } from 'react-redux';
import store from './store';

export default function App() {
	return (
		<Provider store={store}>
			<div className="container">
				<h2 className="row text-center m-4">
					React Shopping Cart <span>Bootstraped in few hours.</span>
				</h2>
				<hr />
				<div className="row">
					<div className="col-md-8">
						<Filter />
						<hr />
						<Products />
					</div>
					<div className="col-md-4">
						<Basket />
					</div>
				</div>
			</div>
		</Provider>
	);
}
