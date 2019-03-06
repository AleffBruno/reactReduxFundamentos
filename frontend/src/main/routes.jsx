import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Todo from '../todo/todo';
import About from '../about/about';

export default props => (
    <Router>
      <div>
        {/* <Route exact path="*" component={App} />  ATENÇÃO!!, se deixar "qualquer rota acesse o component APP*, entao qualquer url que for acessada o component APP vai vir */}
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        {/* REDIRECT ADIADO */}
      </div>
    </Router>
)

// export default props => (
//     <Router history={hashHistory}>
//         <Route path='/todos' component={Todo} />
//         <Route path='/about' component={About} />
//         <Redirect from='*' to='/todos' />
//     </Router>
// )