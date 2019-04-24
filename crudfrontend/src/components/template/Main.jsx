import './Main.css'
import React from 'react'
import Header from './Header'

export default props => (
    <React.Fragment>
        <Header {...props}/>
        <main className="content">
            <nav className="menu">
            
            </nav>
        </main>
    </React.Fragment>
)