import React from 'react';
//import Filho from './FIlho';
import { childrenWithProps } from '../utils/utils';

export default props => 
    <div>
        <h1>Pai: {props.nome} {props.sobrenome}</h1>
        <h2>Filhos:</h2>
        <ul>
            {/* se estiver dentro de um contexto seria this.props.children */}
            {
                childrenWithProps(props)
                //o codigo abaixo foi transformado em uma função e fica em utils
                // React.Children.map(props.children, child => {
                //     return React.cloneElement(child,{...props,...child.props})
                // })
                // React.cloneElement(props.children,{...props,...props.children.props})
            }
        </ul>
    </div>

// export default props => 
//     <div>
//         <h1>{props.nome} {props.sobrenome}</h1>
//         <ul>
//             <Filho nome="Pedro" sobrenome={props.sobrenome}/>
//             <Filho {...props}/>
//             <Filho {...props} nome="Carta" />
//         </ul>
//     </div>