import React from 'react'
import ListImages from './ListImages'

const ListOfImages = ({images, error, handleImageDelete}) => {
  return (
    <>
    {(images.length) ? (
        <ListImages 
        images = {images}
        error = {error}
        handleImageDelete = {handleImageDelete}
        />
    ) : (
        <p>No Images</p>
    )}
    </>
  )
}

export default ListOfImages