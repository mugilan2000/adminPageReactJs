import React from 'react'
import { Link } from 'react-router-dom'
import approveIcon from '../approve_icon.svg';
import rejectIcon from '../reject_icon.svg';

const ListUserUploadImg = ({uImages, error, handleReject, handleApprove}) => {
  return (
    <>
      <div className='table-responsive tableDiv'>
        <table className='table table-bordered table-striped'>
          <thead className='theading'>
            <tr>
              <th>Id</th>
              <th>Filename</th>
              <th>Uploaded By</th>
              <th>Date time</th>
              <th>View Image</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            {uImages.map((uImage) => (
              <tr key={uImage.id}>
                <td>{uImage.id}</td>
                <td>{uImage.filename}</td>
                <td>{uImage.username}</td>
                <td>{uImage.upload_datetime}</td>
                <td><Link to={`/viewimage/${uImage.id}`}>Click to view</Link></td>
                <td><img src={approveIcon} alt='approvebtn' role='button' id='approvebtn' onClick={()=> handleApprove(uImage.id)} style={{
                    width: 30+'px'
                }}></img></td>
                <td><img src={rejectIcon} alt='rejectbtn' role='button' id='rejectbtn' onClick={()=> handleReject(uImage.id)} style={{
                    width: 20+'px'
                }}></img></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>


    </>
  )
}

export default ListUserUploadImg