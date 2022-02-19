import React from 'react'

import ReactDOM from 'react-dom'
import store from 'redux/store'
import App from './App'
import { Provider } from 'react-redux'

import 'styles/antStyles.less'
import GlobalStyle from 'styles/GlobalStyles'

const { PUBLIC_URL } = process.env;

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<GlobalStyle />
			<App basename={PUBLIC_URL} />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);

