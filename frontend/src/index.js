import React from 'react'
import ReactDOM from 'react-dom';
import App from './main/App';
import { Router, Route } from 'react-router'

ReactDOM.render(
    <Router>
        <Route path="/" component={App}/>
    </Router>
    // <App />
,document.getElementById('root'));