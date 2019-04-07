import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//formValueSelector é responsavel por pegar um valor dentro do formulario
import { reduxForm, Field, formValueSelector } from 'redux-form'

import {init} from './billingCyclesActions'
import labelAndInput from '../common/form/labelAndInput'
import CreditList from './creditList'

class BillingCycleForm extends Component {
    render() {
        //estou usando credits aqui pois ja fiz o mapeamento dele no mapStateToProps
        const { handleSubmit, readOnly, credits } = this.props
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
                    <CreditList cols='12 6' list={credits} readOnly={readOnly}/>
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
    credits: selector(state, 'credits')
})
const mapDispatchToProps = dispatch => bindActionCreators({
    init
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)