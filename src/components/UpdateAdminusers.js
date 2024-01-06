import React, { useEffect } from 'react'
import ContentNavigation from './ContentNavigation'
import UpdateAdminUserHeader from './UpdateAdminUserHeader'
import UpdateAdminUserInputs from './UpdateAdminUserInputs'
import UpdateAdminUserFooter from './UpdateAdminUserFooter'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateAdminusers = ({ API_URL }) => {
    const { id } = useParams();

    const navigate = useNavigate();

    document.title = "Update Admin User details"

    useEffect(() => {
        if(!sessionStorage.getItem('isLoggedIn')){
          navigate('/')
        }
      })
    return (
        <>
            <ContentNavigation />
            <div className='addUserForm'>
                <UpdateAdminUserHeader />
                <UpdateAdminUserInputs API_URL={API_URL} />
                <UpdateAdminUserFooter id={id}/>
            </div>
        </>
    )
}

export default UpdateAdminusers