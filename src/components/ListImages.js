import React from 'react'
import { Link } from 'react-router-dom'
import trashIcon from '../trashIcon.svg';

const ListImages = ({images, error, handleImageDelete}) => {
  return (
    <>
      <div className='table-responsive tableDiv'>
        <table className='table table-bordered table-striped'>
          <thead className='theading'>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>View Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            {images.map((image) => (
              <tr key={image.id}>
                <td>{image.id}</td>
                <td>{image.filename}</td>
                <td><Link>Click to view</Link></td>
                <td><img src={trashIcon} alt='trashIcon' role='button' id='deletebtn' onClick={()=> handleImageDelete(image.id)}></img></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>


    </>
  )
}

export default ListImages