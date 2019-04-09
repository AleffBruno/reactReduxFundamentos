import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//referencia para arrayInsert > https://redux-form.com/8.1.0/docs/api/actioncreators.md/ 
import {Field,arrayInsert,arrayRemove} from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import If from '../common/operador/if'

class ItemList extends Component {

    //isso pode dar erro, pq se o cara clicar no idice 2, sendo que o 3 ja existe...oque ira acontecer?
    add(index, item = {}) {
        if(!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm',this.props.field, index, item)
        }
    }

    remove(index) {
        if(!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm',this.props.field,index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item,index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`} component={Input} 
                    placeholder='informe o nome' readOnly={this.props.readOnly} /></td>
                <td><Field name={`${this.props.field}[${index}].value`} component={Input} 
                    placeholder='informe o valor' readOnly={this.props.readOnly}/></td>
                <If test={this.props.showStatus}>
                    <td><Field name={`${this.props.field}[${index}].status`} component={Input} 
                        placeholder='informe o status' readOnly={this.props.readOnly}/></td>
                </If>
                <td>
                    <button type="button" className='btn btn-success'
                        onClick={() => this.add(index + 1)}>
                        <i className='fa fa-plus'></i>
                    </button>
                    <button type="button" className='btn btn-warning'
                        onClick={() => this.add(index + 1, item)}>
                        <i className='fa fa-clone'></i>
                    </button>
                    <button type="button" className='btn btn-danger'
                        onClick={() => this.remove(index)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className='table-actions'>Acao</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    arrayInsert,
    arrayRemove
},dispatch)

export default connect(null,mapDispatchToProps)(ItemList)