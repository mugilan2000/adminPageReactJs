import React from 'react'
import './css/dashboard.css';
import loginImage from '../login_image.png'
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  return (
    <header className=''>
        <img src={loginImage} alt='login_image' className='dashboardImage'/>
        <nav className='navbar'>
            <h4 className='title'>Murugan Vibes</h4>
            <Link to="/dashboard" className='dashboardLink'>Dashboard</Link>
            <ul>
                <li>
                    <Link to="/userslist">Users List</Link>
                </li>
                <li>
                    <Link to="/">Images List</Link>
                </li>
                <li>
                    <Link to="/">Contacts List</Link>
                </li>
                <li>
                    <Link to="/">User Upload Image</Link>
                </li>
                <li>
                    <Link to="/">Add Admin User</Link>
                </li>
                <li>
                    <Link to="/adduser">Add User</Link>
                </li>
            </ul>
        </nav>
        <Link to="/" className='logout'>Logout</Link>
    </header>
  )
}

export default DashboardHeader