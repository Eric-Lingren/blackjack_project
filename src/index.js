import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom'
import CasinoRulesProvider from './context/CasinoRulesProvider'

ReactDOM.render(
    <HashRouter>
        <CasinoRulesProvider>
            <App />
        </CasinoRulesProvider>
    </HashRouter> 
, document.getElementById('root'));
