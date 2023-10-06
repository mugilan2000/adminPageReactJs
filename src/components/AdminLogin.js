import React from 'react'
import LoginHeader from './LoginHeader'
import LoginInputs from './LoginInputs'
import LoginFooter from './LoginFooter'

const AdminLogin = ({API_URL}) => {
  return (
    <div className='loginForm'>
    <LoginHeader />
    <LoginInputs API_URL={API_URL}/>
    <LoginFooter />
    </div>
  )
}

export default AdminLogin