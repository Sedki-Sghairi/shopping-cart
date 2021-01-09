import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div className="container">
					<h1>Shopping Cart Application</h1>
					<hr />
				</div>
			</Provider>
		);
	}
}
export default App;
