import { combineReducers } from 'redux';
import { reducer } from 'redux-form'

import DashboardReducer from '../dashboard/DashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'


const rootReducer = combineReducers({
    dashboard:  DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: reducer
})

export default rootReducer