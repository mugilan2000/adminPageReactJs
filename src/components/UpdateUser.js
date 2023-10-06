import React from 'react'
import ContentNavigation from './ContentNavigation'
import UpdateUserHeader from './UpdateUserHeader'
import UpdateUserInputs from './UpdateUserInputs'

const UpdateUser = ({API_URL}) => {
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