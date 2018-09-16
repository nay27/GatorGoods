import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-list-item'><Link to="/">home</Link></li>
                <li className='nav-list-item'><Link to="/about">about</Link></li>
            </ul>
        </nav>
    )
}

export default Nav