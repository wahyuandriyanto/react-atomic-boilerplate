import React from 'react'

import GlobalStyle from 'styles/GlobalStyles'
import ReactDOM from 'react-dom'
import App from './App'

const { PUBLIC_URL } = process.env;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App basename={PUBLIC_URL} />
	</React.StrictMode>,
	document.getElementById('root')
);

