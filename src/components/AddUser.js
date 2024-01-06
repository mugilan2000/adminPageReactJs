import React, { useEffect, useState } from 'react'
import AddUserHeader from './AddUserHeader'
import AddUserInputs from './AddUserInputs'
import AddUserFooter from './AddUserFooter'
import ContentNavigation from './ContentNavigation'
import './css/addUser.css';
import { useNavigate } from 'react-router-dom'

const AddUser = ({API_URL}) => {
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    document.title = "Add user"

    useEffect(() => {
      if(!sessionStorage.getItem('isLoggedIn')){
        navigate('/')
      }
    })
  return (
    // <main>
    //     <form className='loginInputs'>
    //     <label htmlFor='username'>Username</label>
    //         <input type='text' className='usernameBox' placeholder='Username *'  autoFocus/>


    //         <label htmlFor='email'>Email Address</label>
    //         <input type='text' className='emailBox' placeholder='E-mail Address *'  autoFocus/>
            
    //         <label htmlFor='password'>Password</label>
    //         <input type='password' className='passwordBox' placeholder='Password *' />
    //         <button type='submit'>Add User</button>
    //     </form>
    // </main>
    <>
    <ContentNavigation />
    <div className='addUserForm'>
        
        <AddUserHeader 
        error = {error}
        />
        <AddUserInputs 
        error = {error}
        setError = {setError}
        msg = {msg}
        setMsg = {setMsg}
        API_URL ={API_URL}
        />
        <AddUserFooter />
    </div>
    </>
  )
}

export default AddUser