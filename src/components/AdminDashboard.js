import React, { useEffect } from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardContent from './DashboardContent'
import './css/dashboard.css';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({API_URL}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!sessionStorage.getItem('isLoggedIn')){
      navigate('/')
    }
  })
  return (
    <main className='adminDash'>
      <div className='dashboardHeader'>
        <DashboardHeader />
      </div>
      <div className='dashboardContent'>
        <DashboardContent API_URL = {API_URL}/>
      </div>
    </main>
  )
}

export default AdminDashboard