import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div>
      <nav className='nav'>
        <div className='nav-container'>

          <Link to='' className='nav-name'>
            <h1>T R  <i className="fa-solid fa-mountain" />V Z</h1>
          </Link>

          <ul className={click ? "nav-menu  active" : 'nav-menu'}>

            <li className={'nav-items'}>
              <Link to='/' className='nav-links'>Home</Link>
            </li>
            <li className='nav-items'>
              <Link to='/about' className='nav-links'>About</Link>
            </li>
            <li className='nav-items'>
              <Link to='/service' className='nav-links'>Service</Link>
            </li>
            <li className='nav-items'>
              <Link to='/contact' className='nav-links'>Contact</Link>
            </li>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
              </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar