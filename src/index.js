import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';

const { PUBLIC_URL } = process.env;

ReactDOM.render(
	<React.StrictMode>
		<App basename={PUBLIC_URL} />
	</React.StrictMode>,
	document.getElementById('root')
);

