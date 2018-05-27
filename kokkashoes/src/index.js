import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import LanguageProvider from './components/languageContext';

ReactDOM.render(
    <LanguageProvider>
    <BrowserRouter>
        <Route component={App}/>
    </BrowserRouter>
    </LanguageProvider>, document.getElementById('root'));
registerServiceWorker();
