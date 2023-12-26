import React from 'react'
import './css/stories.css'
import trashIcon from '../trashIcon.svg'

const ListStories = ({ stories, error }) => {

    const getId = (id) => {
        console.log(id);
    }
    return (
        <>
            {stories.map((story) => (
                <div className='storiesBox' key={story.id}>
                    <div className='storiesTitle'>{story.Source}</div>
                    <div className='storiesList' id='stories' onClick={() => getId(story.id)}>{story.Story}</div>
                    <img src={trashIcon} role='button' id='deletebtn' className='storiesDeleteBtn'/>
                </div>

            ))}
        </>
    )
}

export default ListStories