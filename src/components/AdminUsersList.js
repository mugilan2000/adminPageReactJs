import React, { useEffect, useState } from 'react'
import ContentNavigation from './ContentNavigation'
import axios from 'axios';
import ListOfAdminUsers from './ListOfAdminUsers';
import { useNavigate } from 'react-router-dom';

const AdminUsersList = ({ API_URL }) => {

    const [adminUsers, setAdminUsers] = useState([]);
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    document.title = "Admin Users List"

    useEffect(() => {
        if(!sessionStorage.getItem('isLoggedIn')){
          navigate('/')
        }
      })

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordPerPage] = useState(5);

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = adminUsers.slice(firstIndex, lastIndex);
    const npage = Math.ceil(adminUsers.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    let admintext = "Are you sure want to delete admin user?";


    const fetchAdminUsers = async () => {

        const userData = {
          id: null,
          username: null,
          email: null,
          password: null,
          operation: 'adminuserlist'
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
            setAdminUsers(res);
        }
      }
      useEffect(() => {
    
        fetchAdminUsers();
      }, [])

      const handleAdminUserDelete = async (id) => {
        console.log(id);
    
        const deleteId = {
          id: id,
          username: null,
          email: null,
          password: null,
          operation: 'deleteAdminUser'
        }
        console.log(JSON.stringify(deleteId));
    
        if(window.confirm(admintext) == true){
          const response = await axios({
            method: 'post',
            url: API_URL,
            data: JSON.stringify(deleteId)
          });
      
          const res = response.data;
          console.log(res);
          setMsg('Admin User - ' + res[0].username + ' Deleted Successfully');
          setTimeout(() => {
            setMsg('')
          }, 5000)
        }
        else{
          setMsg('Admin user delete operation is cancelled')
          setTimeout(()=> {
            setMsg('')
          }, 5000);
        }
        fetchAdminUsers();
      }


    return (
        <>
            <ContentNavigation />
            <p className='success'>{msg}</p>
            <ListOfAdminUsers 
            adminUsers = {adminUsers}
            error = {error}
            handleAdminUserDelete = {handleAdminUserDelete}
            />
        </>
    )
}

export default AdminUsersList