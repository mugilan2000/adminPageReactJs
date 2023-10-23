import React from 'react'
import ListAdminUsers from './ListAdminUsers'

const ListOfAdminUsers = ({adminUsers, error}) => {
  return (
    <>
    {
        (adminUsers.length ? (
            <ListAdminUsers 
                adminUsers = {adminUsers}
                error = {error}
            />
        ) : (
            <p>No Admin Users</p>
        ) )
    }
    </>
  )
}

export default ListOfAdminUsers