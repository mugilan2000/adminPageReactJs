import axios from 'axios'
import React, { useEffect, useState } from 'react'
import excelIcon from '../excel_icon.svg';
import './css/usersList.css';
import ListOfUsers from './ListOfUsers';
import ContentNavigation from './ContentNavigation';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

const UsersList = ({ API_URL, export_URL }) => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordPerPage] = useState(5);
  
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const npage = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  let text = "Are you sure want to delete the user?";


  const handleUserDelete = async (id) => {
    console.log(id);

    const deleteId = {
      id: id,
      username: null,
      email: null,
      password: null,
      operation: 'deleteUser'
    }
    console.log(JSON.stringify(deleteId));

    if(window.confirm(text) == true){
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
    }
    else{
      setMsg('User delete operation is cancelled')
      setTimeout(()=> {
        setMsg('')
      }, 5000);
    }
    fetchUsers();
  }
  const fetchUsers = async () => {

    const userData = {
      id: null,
      username: null,
      email: null,
      password: null,
      operation: 'userlist'
    }

    const response = await axios({
      method: 'post',
      url: API_URL,
      data: JSON.stringify(userData)
    });
    const res = response.data;

    if (res[0].result === "No Data Found") {
      setError(res[0].result);
    }
    else {
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
          <input type='text' placeholder='Search User' value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>
        <p className='success'>{msg}</p>
        <Link to={export_URL} ><img src={excelIcon} alt='excelIcon' className='excelicon' role='button'></img> </Link>
      </div>
      <ListOfUsers
        users={records.filter(user => (user.username).includes(search))}
        error={error}
        handleUserDelete={handleUserDelete}
      />
      <Pagination
      currentPage = {currentPage}
      setCurrentPage = {setCurrentPage}
      recordsPerPage = {recordsPerPage}
      setRecordPerPage = {setRecordPerPage}
      npage = {npage}
      firstIndex={firstIndex}
      lastIndex={lastIndex}
      />
    </main>
  )
}

export default UsersList