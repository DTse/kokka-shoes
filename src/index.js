import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import LanguageProvider from './components/languageContext';

const rootElement = document.getElementById('root');

		ReactDOM.render(
		<LanguageProvider>
			<BrowserRouter>
				<Route component={App} />
			</BrowserRouter>
		</LanguageProvider>,
		rootElement);
	

//-----------------------------------------------//
if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default
      ReactDOM.render(<NextApp />, rootElement)
    })
  }


registerServiceWorker();