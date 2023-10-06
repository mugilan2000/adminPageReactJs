import axios from 'axios'
import React, { useEffect, useState } from 'react'
import excelIcon from '../excel_icon.svg';
import './css/usersList.css';
import ListOfUsers from './ListOfUsers';
import ContentNavigation from './ContentNavigation';
import { Link, useNavigate } from 'react-router-dom';

const UsersList = ({API_URL}) => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('');
  

  const handleUserDelete = async (id) => {
    console.log(id);

    const deleteId = {
      id: id,
      username: null,
      email: null,
      password: null,
      operation:'deleteUser'
    }
    console.log(JSON.stringify(deleteId));

    const response = await axios({
      method: 'post',
      url: API_URL,
      data: JSON.stringify(deleteId)
    });

    const res = response.data;
    console.log(res);
    setMsg('User - ' + res[0].username + ' Deleted Successfully');
    setTimeout(() => {
      setMsg('')
  }, 5000)
    fetchUsers();
  }
  const fetchUsers = async () => {

    const userData = {
      id:null,
      username: null,
      email: null,
      password: null,
      operation:'userlist'
  }
   
    const response = await axios({
      method: 'post',
      url: API_URL,
      data: JSON.stringify(userData)
    });
    const res = response.data;
    
    if(res[0].result === "No Data Found"){
      setError(res[0].result);
    }
    else{
      setUsers(res);
    }
  }
  useEffect(() => {

    fetchUsers();
  }, [])


  return (
    <main>
      <ContentNavigation />
      <div className='searchWindow'>
      <form className='searchForm'>
        <input type='text' placeholder='Search User' value={search} onChange={(e) => setSearch(e.target.value)}/>
      </form>
      <p className='success'>{msg}</p>
      <Link to="http://localhost/react/export.php" ><img src={excelIcon} alt='excelIcon' className='excelicon' role='button'></img> </Link>
      </div>
      <ListOfUsers 
      users = {users.filter(user => (user.username).includes(search))}
      error = {error}
      handleUserDelete = {handleUserDelete}
      />
    </main>
  )
}

export default UsersList