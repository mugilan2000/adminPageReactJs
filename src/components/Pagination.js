import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/pagination.css';
import reloadIcon from '../reload.svg';
import uparrow from '../up-arrow.svg';
import downarrow from '../down-arrow.svg';

const Pagination = ({ currentPage, setCurrentPage, recordsPerPage, setRecordPerPage, npage, firstIndex, lastIndex, reloadList }) => {

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
    const handleDropdown = (e) => {
        setRecordPerPage(e.target.value);
    }
    return (
        <>
            <div className='page'>
                <Link onClick={prePage} className='prev'>Prev</Link>
                <Link onClick={nextPage} className='next'>Next</Link>
                <p className='pageNo'>Page {currentPage + " / " + npage}</p>
                <p className='showRecords'>Show records - {recordsPerPage}</p>
                <div className='select'>
                    <select onChange={handleDropdown} name="slct" id="slct">
                        <option value=''>Select Page</option>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='50'>50</option>
                        <option value='100'>100</option>
                    </select>
                </div>
                <img src={reloadIcon} alt='reloadIcon' className='reloadbtn' role='button' onClick={reloadList}></img>
            </div>
        </>
    )
}

export default Pagination