import React from 'react'
import { Link } from 'react-router-dom'

const UpdateAdminUserFooter = ({id}) => {
  return (
    <footer className='loginFooter'>
        <Link to={`/updateadminpwd/${id}`}>Change Password?</Link>
    </footer>
  )
}

export default UpdateAdminUserFooter