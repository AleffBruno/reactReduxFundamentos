import React, {Component} from 'react';
import {Field} from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditList extends Component {

    renderRows() {
        const list = this.props.list || []
        return list.map((item,index) => (
            <tr key={index}>
                <td><Field name={`credits[${index}].name`} component={Input} 
                    placeholder='informe o nome' readOnly={this.props.readOnly} /></td>
                <td><Field name={`credits[${index}].value`} component={Input} 
                    placeholder='informe o valor' readOnly={this.props.readOnly}/></td>
                <td></td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Creditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Acao</th>
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

export default CreditList