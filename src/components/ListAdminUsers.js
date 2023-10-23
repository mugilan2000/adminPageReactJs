import React from 'react'

const ListAdminUsers = ({adminUsers, error}) => {
  return (
    <>
    <div className='table-responsive tableDiv'>
        <table className='table table-bordered table-striped'>
          <thead className='theading'>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Create Datetime</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            {adminUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.create_datetime}</td>
                
              </tr>
            ))}

            <p>{error}</p>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListAdminUsers