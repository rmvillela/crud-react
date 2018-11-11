import './Nav.css';
import NavItem from './NavItem';
import React from 'react';

export default props => 
  <aside className="menu-area">
    <nav className="menu">
      <NavItem link="/" icon="home" title="Início"/>
      <NavItem link="/users" icon="users" title="Usuários"/>
    </nav>
  </aside>