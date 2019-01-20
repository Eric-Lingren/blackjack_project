import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom'
import CasinoRulesProvider from './context/CasinoRulesProvider'
import CorrectPlayProvider from './context/CorrectPlayProvider'

ReactDOM.render(
    <HashRouter>
        <CorrectPlayProvider>
        <CasinoRulesProvider>
            <App />
        </CasinoRulesProvider>
        </CorrectPlayProvider>
    </HashRouter> 
, document.getElementById('root'));
