import React from 'react'

import ListUsers from './ListUsers';

const ListOfUsers = ({users, error, handleUserDelete}) => {
  return (
    <>
    {(users.length) ? (
        <ListUsers 
        users = {users}
        error = {error}
        handleUserDelete = {handleUserDelete}
        />
    ) : (
        <p>No Users</p>
    )}
    </>
  )
}

export default ListOfUsers