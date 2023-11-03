import React from 'react'
import ContentNavigation from './ContentNavigation'
import UpdateAdminUserHeader from './UpdateAdminUserHeader'
import UpdateAdminUserInputs from './UpdateAdminUserInputs'
import UpdateAdminUserFooter from './UpdateAdminUserFooter'
import { useParams } from 'react-router-dom'

const UpdateAdminusers = ({ API_URL }) => {
    const { id } = useParams();
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