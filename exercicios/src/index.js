import React from 'react';
import ReactDOM from 'react-dom';

//import Primeiro from './Componentes/Primeiro';
// import BomDia from './Componentes/BomDia';
// import { BoaTarde, BoaNoite } from './Componentes/Multimos';
// import Saudacao from './Componentes/Saudacao';
import Pai from './Componentes/Pai';
import Filho from './Componentes/FIlho';

ReactDOM.render(
    <div>
        <Pai nome="Mark" sobrenome="Silva">
            <Filho nome="jose" ></Filho>
            <Filho nome="carla" ></Filho>
            <Filho nome="julia" ></Filho>
        </Pai>
    </div>
,document.getElementById('root'));


// ReactDOM.render(
//     <div>
//         <Pai nome="Mark" sobrenome="Silva" />
//     </div>
// ,document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom Dia" nome="Mark" />
//     </div>
// ,document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Mark" />
//         <BoaNoite nome="Maxximiliam" />
//     </div>
// ,document.getElementById('root'));