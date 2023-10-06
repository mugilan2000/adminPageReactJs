import React from 'react'
import loginImage from '../login_image.png'
import './css/login.css';

const LoginHeader = () => {
  return (
    <header>
        <img src={loginImage} alt='login_image' className='loginImage'/>
        <h4 className='loginHeading'>Admin Sign in</h4>
    </header>
  )
}

export default LoginHeader