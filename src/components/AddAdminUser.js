import React, { useEffect, useState } from 'react'
import ContentNavigation from './ContentNavigation'
import AddAdminUserHeader from './AddAdminUserHeader'
import AddAdminUserInputs from './AddAdminUserInputs'
import AddAdminUserFooter from './AddAdminUserFooter'
import { useNavigate } from 'react-router-dom'

const AddAdminUser = ({ API_URL }) => {
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    document.title = "Add Admin User"

    useEffect(() => {
        if(!sessionStorage.getItem('isLoggedIn')){
          navigate('/')
        }
      })
    return (
        <>
            <ContentNavigation />
            <div className='addUserForm'>
                <AddAdminUserHeader
                    error={error}
                />
                <AddAdminUserInputs
                    error={error}
                    setError={setError}
                    msg={msg}
                    setMsg={setMsg}
                    API_URL={API_URL}
                />
                <AddAdminUserFooter />
            </div>
        </>
    )
}

export default AddAdminUser