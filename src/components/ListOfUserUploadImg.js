import React from 'react'
import ListUserUploadImg from './ListUserUploadImg'

const ListOfUserUploadImg = ({uImages, error, handleReject, handleApprove}) => {
  return (
    <>
    {(uImages.length) ? (
        <ListUserUploadImg 
        uImages = {uImages}
        error = {error}
        handleReject = {handleReject}
        handleApprove = {handleApprove}
        />
    ) : (
        <p>No Images</p>
    )}
    </>
  )
}

export default ListOfUserUploadImg