import React from 'react'
import loginImage from '../login_image.png'
import './css/login.css';

const UserLoginHeader = () => {
  return (
    <header>
        <img src={loginImage} alt='login_image' className='loginImage'/>
        <h4 className='loginHeading'>Sign in</h4>
    </header>
  )
}

export default UserLoginHeader