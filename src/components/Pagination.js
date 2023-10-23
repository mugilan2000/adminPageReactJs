import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/pagination.css';

const Pagination = ({currentPage, setCurrentPage, recordsPerPage, setRecordPerPage, npage, firstIndex, lastIndex}) => {
    
    
    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const increaseCount = () => {
        setRecordPerPage(recordsPerPage + 1)
    }
    const decreaseCount = () => {
        setRecordPerPage(recordsPerPage - 1)
    }
    return (
        <>
            <div className='page'>
                <Link onClick={prePage} className='prev'>Prev</Link>
                <Link onClick={nextPage} className='next'>Next</Link>
                <p className='pageNo'>Page {currentPage + " / " + npage}</p>
                <p className='showRecords'>Show records - {recordsPerPage}</p>
                <button className='plusbtn' onClick={increaseCount}>+</button>
                <button className='minusbtn'onClick={decreaseCount}>-</button>
            </div>
        </>
    )
}

export default Pagination