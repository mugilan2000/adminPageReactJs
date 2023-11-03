import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './css/adminPwdChange.css';

const UpdateAdminPwdInputs = ({ API_URL, id }) => {
  const [newPwd, setNewPwd] = useState('');
  const [confirmNewPwd, setConfirmNewPwd] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e, type) => {
    switch (type) {
      case "newpwd":
        setError('');
        setNewPwd(e.target.value)
        if (e.target.value === "") {
          setError("New Password is required");
        }
        break
      case "cnewpwd":
        setError('');
        setConfirmNewPwd(e.target.value)
        if (e.target.value === "") {
          setError("Please confirm new password");
        }
        break
      default:
    }
  }

  const handleAdminPwdChange = async (e) => {
    e.preventDefault()
    if (newPwd !== "") {
      if(newPwd === confirmNewPwd){
        const userData = {
          id: id,
          operation: 'updateAdminPwd',
          username: null,
          email: null,
          password: newPwd
        }
  
        console.log(userData);
  
        try {
          const response = await axios({
            method: 'post',
            url: API_URL,
            data: JSON.stringify(userData)
          })
          const res = response.data;
          console.log(res[0].result);
          if (res[0].result === "No users found") {
            setError(res[0].result)
          }
          else {
            setMsg(res[0].result)
            setTimeout(function () {
              navigate('/adminuserslist')
            }, 3000)
          }
        }
        catch (e) {
          console.log(e)
        }
      }
      else{
        setError("New Password and Confirm New Password not same")
      }
    }
    else {
      setError("Please fill details")
    }
  }

  return (
    <main className='addUserMain'>

      <form className='loginInputs' onSubmit={handleAdminPwdChange}>

        <p>

          {
            error !== "" ? <span className='error'>{error}</span> : <span className='success'>{msg}</span>
          }
        </p>

        <label htmlFor='newpwd'>New Password</label>
        <input type='password' className='emailBox' id='newpwdbox' placeholder='New Password *' onChange={(e) => handleInputChange(e, 'newpwd')} />

        <label htmlFor='cnewpwd'>Confirm New Password</label>
        <input type='password' className='emailBox' id='cnewpwdbox' placeholder='Confirm New Password *' onChange={(e) => handleInputChange(e, 'cnewpwd')} />

        <button type='submit'>Update</button>
      </form>
    </main>
  )
}

export default UpdateAdminPwdInputs