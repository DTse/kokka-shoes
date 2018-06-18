import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import LanguageProvider from './components/languageContext';
import { hydrate, render } from 'react-dom';

//const rootElement = document.getElementById('root');

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<LanguageProvider>
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>
</LanguageProvider>, rootElement);
} else {
  render(<LanguageProvider>
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>
</LanguageProvider>, rootElement);
}

registerServiceWorker();