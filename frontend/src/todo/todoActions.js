import axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return async dispatch => {
        const request = await axios.get(`${URL}?sort=-createdAt`)
        dispatch({type:'TODO_SEARCHED', payload: request})
    }
    // const request = axios.get(`${URL}?sort=-createdAt`)
    // return {
    //     type: 'TODO_SEARCHED',
    //     payload: request
    // }
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

// SEM ASYNC/AWAIT
// export const add = description => {
//     return dispatch => {
//         axios.post(URL,{description})
//             .then(resp => dispatch({type:'TODO_ADDED',payload:resp.data}))
//             .then(resp => dispatch(search()))
//     }
// }

export const add = description => {
    return async dispatch => {
        try {
            const response = await axios.post(URL,{description});
            dispatch({type:'TODO_ADDED',payload:response.data})
            dispatch(search())
        } catch(e) {
            console.log(e);
        }
    }
}