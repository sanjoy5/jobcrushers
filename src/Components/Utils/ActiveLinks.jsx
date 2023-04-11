import React from 'react'
import { NavLink } from 'react-router-dom'
import './ActiveLinks.css'

const ActiveLinks = ({ to, children }) => {
    return (
        <>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "active mr-5 font-medium text-lg" : "mr-5 font-medium text-lg"
                }
            >
                {children}
            </NavLink>
        </>
    )
}

export default ActiveLinks