import React from 'react'
import { Link } from 'react-router-dom'

import './NavigationBar.css'

const NavigationBar = (props) => (
  <nav className='navigationBar'>
    <div className='navigationBar-container'>
      <Link className='navigationBar-container-logo' to='/'>{props.title}</Link>
      <ul className='navigationBar-container-menu'>
        {/* <li><Link className='navigationBar-container-menu-list' to='/'>login</Link></li>
        <li><Link className='navigationBar-container-menu-list' to='/'>logout</Link></li> */}
        <li className='navigationBar-container-menu-list'><Link to='/'>login</Link></li>
        <li className='navigationBar-container-menu-list'><Link to='/'>logout</Link></li>
      </ul>
    </div>
  </nav>
)

export default NavigationBar