import React from 'react'
import ListAdminUsers from './ListAdminUsers'

const ListOfAdminUsers = ({adminUsers, error, handleAdminUserDelete}) => {
  return (
    <>
    {
        (adminUsers.length ? (
            <ListAdminUsers 
                adminUsers = {adminUsers}
                error = {error}
                handleAdminUserDelete = {handleAdminUserDelete}
            />
        ) : (
            <p>No Admin Users</p>
        ) )
    }
    </>
  )
}

export default ListOfAdminUsers