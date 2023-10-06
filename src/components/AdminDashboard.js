import React from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardContent from './DashboardContent'
import './css/dashboard.css';

const AdminDashboard = ({API_URL}) => {
  return (
    <main className='adminDash'>
      <div className='dashboardHeader split'>
        <DashboardHeader />
      </div>
      <div className='dashboardContent split'>
        <DashboardContent API_URL = {API_URL}/>
      </div>
    </main>
  )
}

export default AdminDashboard