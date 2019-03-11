import axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

// export const add = (description) => {
//     //atente-se, possivelmente o search pode ser feito antes do POST, entao tem
//     //que por algo do tipo 'await' para ser chamado em 'sequencia'
//     const request = axios.post(URL,{description:description})
//     return [
//         {type: 'TODO_ADDED',payload: request},
//         search()
//     ]
// }

export const add = description => {
    return dispatch => {
        axios.post(URL,{description})
            .then(resp => dispatch({type:'TODO_ADDED',payload:resp.data}))
            .then(resp => dispatch(search()))
    }
}

// export const add = description => {
//     return async dispatch => {
//         await axios.post(URL,{description})
//         await dispatch({type:'TODO_ADDED',payload:resp.data})
//         dispatch(search())
//     }
// }