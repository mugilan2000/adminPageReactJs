import React from 'react'
import trashIcon from '../trashIcon.svg';
import editIcon from '../edit_icon.svg';
import { Link } from 'react-router-dom';

const ListAdminUsers = ({adminUsers, error, handleAdminUserDelete}) => {
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
              <th>Edit</th>
              <th>Delete</th>
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
                <td><Link to={`/adminupdate/${user.id}`}><img src={editIcon} alt='editIcon'></img></Link></td>
                <td><img src={trashIcon} alt='trashIcon' role='button' id='deletebtn' onClick={() => handleAdminUserDelete(user.id)}></img></td>
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