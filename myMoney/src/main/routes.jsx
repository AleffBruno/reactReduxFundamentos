import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
//import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard}></IndexRoute>
            {/* <Route path='/billingCycles' component={BillingCycle} /> */}
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        {/* <Route path='/' component={Dashboard} /> */}
        
        {/* ISSO SEMPRE DA PROBLEMA, AGORA GEROU UM LOOP <Redirect from='*' to='/' /> */}
    </Router>
)