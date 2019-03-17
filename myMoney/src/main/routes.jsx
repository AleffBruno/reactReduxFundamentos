import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
//import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        {/* ISSO SEMPRE DA PROBLEMA, AGORA GEROU UM LOOP <Redirect from='*' to='/' /> */}
    </Router>
)