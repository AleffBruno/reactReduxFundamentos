import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//formValueSelector é responsavel por pegar um valor dentro do formulario
import { reduxForm, Field, formValueSelector } from 'redux-form'

import {init} from './billingCyclesActions'
import labelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        //estou usando credits/debts aqui pois ja fiz o mapeamento dele no mapStateToProps
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    {/* readOnly esta sendo checkado em 'labelAndInput' */}
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='informe o nome'/>
                    <Field name='month' component={labelAndInput} type='number' readOnly={readOnly}
                        label='Mes' cols='12 4' placeholder='informe o mes'/>
                    <Field name='year' component={labelAndInput} type='number' readOnly={readOnly}
                        label='ano' cols='12 4' placeholder='informe o ano'/>
                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos'/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus={true}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' 
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form:'billingCycleForm',destroyOnUnmount:false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

//quero pegar os campos "creditos" na aba inserir e colocar na chave "credits"
const mapStateToProps = (state) => ({
    credits: selector(state, 'credits'),
    debts: selector(state,'debts')
})

const mapDispatchToProps = dispatch => bindActionCreators({
    init
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)