import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact activeClassName='active' className="nav-link" to='/'>Add List</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='active' className="nav-link" to='/list'>List of Items</NavLink>
      </li>

    </ul>
    </nav>
  )
}

export default Navigation;