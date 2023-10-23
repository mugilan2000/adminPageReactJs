import React, { useEffect, useState } from 'react'
import ContentNavigation from './ContentNavigation'
import axios from 'axios';
import ListOfAdminUsers from './ListOfAdminUsers';

const AdminUsersList = ({ API_URL }) => {

    const [adminUsers, setAdminUsers] = useState([]);
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordPerPage] = useState(5);

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = adminUsers.slice(firstIndex, lastIndex);
    const npage = Math.ceil(adminUsers.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);


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


    return (
        <>
            <ContentNavigation />
            <ListOfAdminUsers 
            adminUsers = {adminUsers}
            error = {error}
            />
        </>
    )
}

export default AdminUsersList