import React, { useEffect, useState } from 'react'
import ContentNavigation from './ContentNavigation'
import axios from 'axios';
import ListOfStories from './ListOfStories';
import { useNavigate } from 'react-router-dom';

const StoriesList = ({ API_URL }) => {

  document.title = "Stories List"

  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

    useEffect(() => {
        if(!sessionStorage.getItem('isLoggedIn')){
          navigate('/')
        }
      })

  const fetchStories = async () => {

    const userData = {
      id: null,
      username: null,
      email: null,
      password: null,
      operation: 'storiesList'
    }

    const response = await axios({
      method: 'post',
      url: API_URL,
      data: JSON.stringify(userData)
    });
    const res = response.data;
    if (res.length === 0) {
      setError("No Data Found");
    }
    else {
      setStories(res);
      console.log(res.length);
      setMsg("Data Fetched Successfully");
    }

  }

  useEffect(() => {

    fetchStories();
  }, [])

  return (
    <>
      <ContentNavigation />
      <div className='searchWindow' style={{
        justifyContent: 'center'
      }}>
        <form className='searchForm'>
          <input type='text' placeholder='Search Stories' value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>
        <p style={{
          margin: 0
        }}>

          {/* {
                        error !== "" ? <span className='error'>{error}</span> : <span className='success'>{msg}</span>
                    } */}
          Error / Message - <span className='error'>{error}</span> <span className='success'>{msg}</span>

        </p>
      </div>
      <ListOfStories
        stories={stories.filter(story => (story.Source).includes(search))}
        error={error}
      />
    </>
  )
}

export default StoriesList