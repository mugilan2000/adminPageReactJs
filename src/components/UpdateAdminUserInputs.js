import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateAdminUserInputs = ({ API_URL }) => {

  const { id } = useParams();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminUsersForUpdate = async () => {
      const userData = {
        id: id,
        username: null,
        email: null,
        password: null,
        operation: 'fetchADUsersForUpdate'
      }
      console.log(JSON.stringify(userData))
      try {
        const response = await axios({
          method: 'post',
          url: API_URL,
          data: JSON.stringify(userData)
        })

        const res = response.data;
        console.log(res[0].username + " " + res[0].email);
        setUserName(res[0].username);
        setEmail(res[0].email)
      }
      catch (e) {
        console.log(e);
      }
    }


    (async () => await fetchAdminUsersForUpdate())()

  }, [])


  const handleInputChange = (e, type) => {
    switch (type) {
      case "email":
        setError('');
        setEmail(e.target.value)
        if (e.target.value === "") {
          setError("Email is required");
        }
        break
      case "username":
        setError('');
        setUserName(e.target.value)
        if (e.target.value === "") {
          setError("Username is required");
        }
        break
      default:
    }
  }

  const handleUpdateAdminUser = async (e) => {
    e.preventDefault()
    if (email !== "" && userName !== "") {
      const userData = {
        id: id,
        operation: 'updateAdminUser',
        username: userName,
        email: email,
        password: null
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
        if (res[0].result === "Username Already Exists" || res[0].result === "Email Already Exists") {
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
  }

  return (
    <main className='addUserMain'>

      <form className='loginInputs' onSubmit={handleUpdateAdminUser}>

        <p>

          {
            error !== "" ? <span className='error'>{error}</span> : <span className='success'>{msg}</span>
          }
        </p>

        <label htmlFor='username'>Username</label>
        <input type='text' className='usernameBox' placeholder='Username *' value={userName} onChange={(e) => handleInputChange(e, 'username')} autoFocus />

        <label htmlFor='email'>Email Address</label>
        <input type='text' className='emailBox' placeholder='E-mail Address *' value={email} onChange={(e) => handleInputChange(e, 'email')} />

        <button type='submit'>Update</button>
      </form>
    </main>
  )
}

export default UpdateAdminUserInputs