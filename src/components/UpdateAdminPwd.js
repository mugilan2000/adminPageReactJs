import React from 'react'
import ContentNavigation from './ContentNavigation'
import UpdateAdminPwdHeader from './UpdateAdminPwdHeader'
import UpdateAdminPwdInputs from './UpdateAdminPwdInputs'
import { useParams } from 'react-router-dom'

const UpdateAdminPwd = ({API_URL}) => {
    const { id } = useParams();
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