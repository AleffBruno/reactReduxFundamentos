import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form'; 
import { selectTab, showTabs } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
//este valor credits com array de obj vazio é para quando for incluir um valor, pelo menos um input apareça no formulario
const INITIAL_VALUES= {credits:[{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    //console.log(values)
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : '';
        // axios.post(`${BASE_URL}/billingCycles`, values)
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso')
            dispatch(init())
        }).catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro',error));
        })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs(`tabUpdate`),
        selectTab(`tabUpdate`),
        initialize(`billingCycleForm`,billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs(`tabDelete`),
        selectTab(`tabDelete`),
        initialize(`billingCycleForm`,billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm',INITIAL_VALUES)
    ]
}