import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/pagination.css';
import reloadIcon from '../reload.svg';
import uparrow from '../up-arrow.svg';
import downarrow from '../down-arrow.svg';

const Pagination = ({currentPage, setCurrentPage, recordsPerPage, setRecordPerPage, npage, firstIndex, lastIndex, reloadList}) => {
    
    
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
                <img src={uparrow} alt='up-arrow' className='plusbtn' role='button' onClick={increaseCount}></img>
                <img src={downarrow} alt='down-arrow' className='minusbtn' role='button' onClick={decreaseCount}></img>
                <img src={reloadIcon} alt='reloadIcon' className='reloadbtn' role='button' onClick={reloadList}></img>
            </div>
        </>
    )
}

export default Pagination