import React, { useState } from 'react'
import ContentNavigation from './ContentNavigation'
import AddAdminUserHeader from './AddAdminUserHeader'
import AddAdminUserInputs from './AddAdminUserInputs'
import AddAdminUserFooter from './AddAdminUserFooter'

const AddAdminUser = ({ API_URL }) => {
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
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