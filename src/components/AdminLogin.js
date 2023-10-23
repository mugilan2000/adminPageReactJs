import React from 'react'
import LoginHeader from './LoginHeader'
import LoginInputs from './LoginInputs'
import LoginFooter from './LoginFooter'

const AdminLogin = ({ API_URL, isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className='loginForm'>
      <LoginHeader />
      <LoginInputs
        API_URL={API_URL}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <LoginFooter />
    </div>
  )
}

export default AdminLogin