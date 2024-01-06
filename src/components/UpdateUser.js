import React, { useEffect } from 'react'
import ContentNavigation from './ContentNavigation'
import UpdateUserHeader from './UpdateUserHeader'
import UpdateUserInputs from './UpdateUserInputs'
import { useNavigate } from 'react-router-dom'

const UpdateUser = ({API_URL}) => {

    const navigate = useNavigate();

    document.title = "Update user details"

    useEffect(() => {
        if(!sessionStorage.getItem('isLoggedIn')){
          navigate('/')
        }
      })
    return (
        <>
        <ContentNavigation />
        <div className='addUserForm'>
            <UpdateUserHeader />
            <UpdateUserInputs API_URL={API_URL}/>
        </div>
        </>
    )
}

export default UpdateUser