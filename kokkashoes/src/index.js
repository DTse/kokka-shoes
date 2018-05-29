import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { hydrate, render } from 'react-dom';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import LanguageProvider from './components/languageContext';


 
const rootElement = document.getElementById('root');

  render(<LanguageProvider>
    <BrowserRouter>
        <Route component={App}/>
    </BrowserRouter>
    </LanguageProvider>, rootElement);

registerServiceWorker();
