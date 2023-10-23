import axios from 'axios';
import React, { useState } from 'react'

const AddAdminUserInputs = ({ error, setError, msg, setMsg, API_URL }) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e, type) => {
        switch (type) {
            case "username":
                setError('')
                setUsername(e.target.value)
                if (e.target.value === '') {
                    setError("Username is required")
                }
                break
            case "email":
                setError('')
                setEmail(e.target.value)
                if (e.target.value === '') {
                    setError("Email is required")
                }
                break
            case "pass":
                setError('')
                setPassword(e.target.value)
                if (e.target.value === '') {
                    setError("Password is required")
                }
                break
            default:
        }
    }

    const handleAddAdminUserForm = async (e) => {
        e.preventDefault();
        if(username !== "" && email !== "" && password !== ""){
            const userData = {
                id:null,
                username: username,
                email: email,
                password: password,
                operation:'addadminuser'
            }
            console.log(JSON.stringify(userData))

            const response = await axios({
                method: 'post',
                url: API_URL,
                data: JSON.stringify(userData)
            });

            const res = response.data;
            console.log(res[0].result);
            if(res[0].result === "Username Already Exists" || res[0].result === "Email Already Exists"){
                setError(res[0].result);
            }
            else{
                setMsg(res[0].result);
            }
        }
        else{
            setError('Please fill details')
        }
        setUsername('');
        setEmail('')
        setPassword('')
    }

    return (
        <main className='addUserMain'>
            <p>

                {
                    error !== "" ? <span className='error'>{error}</span> : <span className='success'>{msg}</span>
                }
            </p>
            <form className='loginInputs' onSubmit={handleAddAdminUserForm}>

                <label htmlFor='username'>Username</label>
                <input type='text' className='usernameBox' placeholder='Username *' value={username} onChange={(e) => handleInputChange(e, 'username')} autoFocus />

                <label htmlFor='email'>Email Address</label>
                <input type='text' className='emailBox' placeholder='E-mail Address *' value={email} onChange={(e) => handleInputChange(e, 'email')}/>

                <label htmlFor='password'>Password</label>
                <input type='password' className='passwordBox' placeholder='Password *' value={password} onChange={(e) => handleInputChange(e, 'pass')}/>
                <button type='submit'>Add</button>
            </form>
        </main>
    )
}

export default AddAdminUserInputs