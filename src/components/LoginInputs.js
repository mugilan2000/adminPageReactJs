import React, { useEffect, useState } from 'react'
import './css/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginInputs = ({API_URL, isLoggedIn, setIsLoggedIn}) => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const handleInputChange = (e, type) => {
    switch(type){
      case "email":
        setError('');
        setEmail(e.target.value)
        if(e.target.value === ""){
          setError("Email is required");
        }
        break
      case "pass":
        setError('');
        setPassword(e.target.value)
        if(e.target.value === ""){
          setError("Password is required");
        }
        break
      default:
    }
  }
 
  const handleAdminSignIn =  async (e) => {
    e.preventDefault()
    if(email !== "" && password !== ""){
      const userData = {
        id:null,
          operation:'checkUser',
          username:null,
          email: email,
          password: password
      }
      const response = await axios({
        method: 'post',
        url:API_URL,
        data:JSON.stringify(userData)
      })
      const res = response.data;
      console.log(res[0].result);
      console.log(res[0].isLoggedIn);
      
      if(res[0].result === "Invalid User" || res[0].result === "Invalid Password"){
            setError(res[0].result)
            
          }
          else{
            setMsg(res[0].result)
            setTimeout(function(){
              navigate('/dashboard')
            }, 3000)
            window.localStorage.setItem("isLoggedIn", true);
          }
        // var url = API_URL;
        // var headers = {
        //   "Accept": "application/json",
        //   "Content-type": "application/json"
        // };
        // var Data = {
        //   id:null,
        //   operation:'checkUser',
        //   username:null,
        //   email: email,
        //   password: password
        // };
        // await fetch(url, {
        //   method: "POST",
        //   headers: headers,
        //   body: JSON.stringify(Data)
        // }).then((response) =>
        // response.json())
        // .then((response) => {
        //   if(response[0].result === "Invalid User" || response[0].result === "Invalid Password"){
        //     setError(response[0].result)
        //   }
        //   else{
        //     setMsg(response[0].result)
        //     setTimeout(function(){
        //       navigate('/dashboard')
        //     }, 3000)
        //   }
        // })
        // .catch((err) => {
        //   setError(err)
        // })
    }
    else{
      setError("Please fill details")
    }
    
    setEmail('');
    setPassword('');
  }

  useEffect(() => {
    setTimeout(() => {
        setMsg('')
    }, 5000)
  },[msg])

  return (
    <main>
      <span value={error}></span>
        <form className='loginInputs' onSubmit={handleAdminSignIn}>
          <p>

            {
              error !=="" ? <span className='error'>{error}</span> : <span className='success'>{msg}</span>
            }
          </p>
            <label htmlFor='email'>Email Address</label>
            <input type='text' className='emailBox' placeholder='E-mail Address *' value={email} onChange={(e) => handleInputChange(e, 'email')} autoFocus/>
            
            <label htmlFor='password'>Password</label>
            <input type='password' className='passwordBox' placeholder='Password *' value={password} onChange={(e) => handleInputChange(e, 'pass')}/>
            <button type='submit'>Sign in</button>
        </form>
    </main>
  )
}

export default LoginInputs