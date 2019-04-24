import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

// import App from './main/app';
import Routes from './main/routes'
import reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers,devTools)
//const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <Routes />
    </Provider>
,document.getElementById('app'))

