import React from 'react'
import ListStories from './ListStories'

const ListOfStories = ({stories, error}) => {
  return (
    <>
    {(stories.length) ? (
        <ListStories 
        stories = {stories}
        error = {error}
        />
    ) : (
        <p>No Stories</p>
    )}
    </>
  )
}

export default ListOfStories