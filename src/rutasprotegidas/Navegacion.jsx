import React from 'react'
import { Link } from 'react-router-dom'

export const Navegacion = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/landing'>Landing</Link></li>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/dashboard'>Dash</Link></li>
                    <li><Link to='/usuarios'>Usuarios</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                </ul>
            </nav>
        </>
    )
}
