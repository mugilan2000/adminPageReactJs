import React from 'react'
import './css/login.css';

const UserLoginInputs = () => {
  return (
    <main>
        <form className='loginInputs'>
            <label htmlFor='email'>Email Address</label>
            <input type='text' className='emailBox' placeholder='E-mail Address *' autoFocus/>
            <label htmlFor='password'>Password</label>
            <input type='password' className='passwordBox' placeholder='Password *'/>
            <label typeof='forgotpassword'>Forgot Password</label>
            <h4 className='fgpwdlink'>Forgot Password?</h4>
            <button type='submit'>Sign in</button>
        </form>
    </main>
  )
}

export default UserLoginInputs