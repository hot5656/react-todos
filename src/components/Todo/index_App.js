// index.js 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from 'styled-components'

const theme = {
	colors: {
		primary_300: '#ff7979',
		primary_400: '#e33e3e',
		primary_500: '#af0505'
	}
}

ReactDOM.render(
	// theme傳入
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
	,
	document.getElementById('root')
);


