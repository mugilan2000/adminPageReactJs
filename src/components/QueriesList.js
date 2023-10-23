import React, { useEffect, useState } from 'react'
import ContentNavigation from './ContentNavigation'
import axios from 'axios';
import ListQueries from './ListQueries';
import Pagination from './Pagination';
import './css/pagination.css'

const QueriesList = ({API_URL}) => {
    const [queries, setQueries] = useState([]);
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordPerPage] = useState(5);
  
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const queriesRecords = queries.slice(firstIndex, lastIndex);
  const npage = Math.ceil(queries.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

    const fetchQueries = async () => {
        const userData = {
            id: null,
            username: null,
            email: null,
            password: null,
            operation: 'querieslist'
          }

          const response = await axios({
            method: 'post',
            url: API_URL,
            data: JSON.stringify(userData)
          });
          const res = response.data;
          console.log(res)

          if (res[0].result === "No Data Found") {
            setError(res[0].result);
          }
          else {
            setQueries(res);
          }
    }

    useEffect(() => {

        fetchQueries();
      }, [])
  return (
    <main>
        <ContentNavigation />
        {(queries.length) ? (
        <ListQueries 
        queries = {queriesRecords}
        error = {error}
        />
        ) : (
            <p>No Users</p>
        )}
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

export default QueriesList