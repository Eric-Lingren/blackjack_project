import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom'
import CasinoRulesProvider from './context/CasinoRulesProvider'

ReactDOM.render(
    <CasinoRulesProvider>
        <HashRouter>
            <App />
        </HashRouter>
    </CasinoRulesProvider>, 
document.getElementById('root'));
