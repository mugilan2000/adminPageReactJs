import React from 'react'
import { Link } from 'react-router-dom'
import './css/contentNav.css';

const ContentNavigation = () => {
    const handleLogout = () => {
        sessionStorage.removeItem("isLoggedIn");
    }
  return (
    <>
    <nav className='contentnav'>
    <h4 className='title'>Murugan Vibes</h4>
            {/* <Link to="/dashboard" className='dashboardLink1'>Dashboard</Link> */}
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/adduser">Add User</Link>
                </li>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
    </nav>
    </>
  )
}

export default ContentNavigation