import "./Nav.css"
import React from 'react'
import NavItem from './NavItem';

export default props => (
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="#/" icon="home" title="Inicio" />
            <NavItem href="#/" icon="users" title="Usuarios" />
        </nav>
    </aside>
)