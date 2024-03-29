import React from 'react'
import './css/dashboard.css';
import loginImage from '../login_image.png'
import { Link, useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem("isLoggedIn");
    }
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
                    <Link to="/imageslist">Images List</Link>
                </li>
                <li>
                    <Link to="/querieslist">Contacts List</Link>
                </li>
                <li>
                    <Link to="/useruploadimageslist">User Upload Image</Link>
                </li>
                <li>
                    <Link to="/addadminuser">Add Admin User</Link>
                </li>
                <li>
                    <Link to="/adduser">Add User</Link>
                </li>
                <li>
                    <Link to="/adminprofile">View Profile</Link>
                </li>
            </ul>
        </nav>
        <Link to="/" className='logout' onClick={handleLogout}>Logout</Link>
    </header>
  )
}

export default DashboardHeader