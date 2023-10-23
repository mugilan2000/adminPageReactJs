import React from 'react'
import './css/queriesList.css'

const ListQueries = ({queries, error}) => {
  return (
    <>
      <div className='table-responsive tableDiv'>
        <table className='table table-bordered table-striped'>
          <thead className='theading'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Message</th>
              <th>Create Datetime</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            {queries.map((query) => (
              <tr key={query.id}>
                <td>{query.id}</td>
                <td>{query.name}</td>
                <td>{query.email}</td>
                <td>{query.mobilenumber}</td>
                <td>{query.message}</td>
                <td>{query.create_datetime}</td>
                
              </tr>
            ))}

            <p>{error}</p>

          </tbody>
        </table>
      </div>


    </>
  )
}

export default ListQueries