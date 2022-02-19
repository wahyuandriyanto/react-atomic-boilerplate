import React from 'react'


import ReactDOM from 'react-dom'
import App from './App'
import 'styles/antStyles.less'
import GlobalStyle from 'styles/GlobalStyles'

const { PUBLIC_URL } = process.env;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App basename={PUBLIC_URL} />
	</React.StrictMode>,
	document.getElementById('root')
);

