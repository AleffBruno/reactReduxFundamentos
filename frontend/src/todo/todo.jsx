import React, {Component} from 'react';
import axios from 'axios'

import PageHeader from '..//template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
       

        this.refresh()
    }

    refresh(description) {
        // referencia da documentação do nodeRestFull para regex >> [campo]__regex=/^[palavra_chave]/i << 'i' significa insensitive
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then((resp) => this.setState({
                ...this.state,
                description,
                list: resp.data
            }))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        //e = evento , target = input que chamou , value = valor do input
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL,{ description })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        // console.log(todo);
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        //console.log(todo);
        axios.put(`${URL}/${todo._id}`,{ ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        //console.log(todo);
        axios.put(`${URL}/${todo._id}`,{ ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }
    
    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                    handleClear={this.handleClear}
                />
            </div>
        )
    }
}