import React, { useEffect } from 'react'
import ContentNavigation from './ContentNavigation'
import UpdateAdminPwdHeader from './UpdateAdminPwdHeader'
import UpdateAdminPwdInputs from './UpdateAdminPwdInputs'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateAdminPwd = ({API_URL}) => {
    const { id } = useParams();

    const navigate = useNavigate();

    document.title = "Change Admin Password"

    useEffect(() => {
        if(!sessionStorage.getItem('isLoggedIn')){
          navigate('/')
        }
      })
    return (
        <>
            <ContentNavigation />
            <div className='addUserForm'>
                <UpdateAdminPwdHeader />
                <UpdateAdminPwdInputs API_URL = {API_URL} id={id}/>
            </div>
        </>
    )
}

export default UpdateAdminPwd