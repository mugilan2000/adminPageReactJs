import React, { useEffect, useState } from 'react'
import ContentNavigation from './ContentNavigation'
import axios from 'axios';
import ListOfUserUploadImg from './ListOfUserUploadImg';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';

const UserUploadImgList = ({ API_URL }) => {

    const [uImages, setUImages] = useState([]);
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    document.title = "User upload Images List"

    useEffect(() => {
        if(!sessionStorage.getItem('isLoggedIn')){
          navigate('/')
        }
      })

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordPerPage] = useState(5);

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = uImages.slice(firstIndex, lastIndex);
    const npage = Math.ceil(uImages.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    let approveText = "Are you sure want to approve the image?";
    let rejectText = "Are you sure want to reject the image?";

    const fetchUserUploadImages = async () => {

        const userData = {
            id: null,
            username: null,
            email: null,
            password: null,
            operation: 'useruploadimageslist'
        }

        const response = await axios({
            method: 'post',
            url: API_URL,
            data: JSON.stringify(userData)
        });
        const res = response.data;

        if (res[0].result === "No Data Found") {
            setError(res[0].result);
            setTimeout(() => {
                setError('')
            }, 5000)
        }
        else {
            setUImages(res);
        }
    }

    useEffect(() => {

        fetchUserUploadImages();
    }, [])

    const reloadList = async () => {
        await fetchUserUploadImages();
    }

    const handleApprove = async (id) => {

        console.log(id);

        const data = {
            id: id,
            username: null,
            email: null,
            password: null,
            operation: 'approveImage'
        }

        if (window.confirm(approveText) == true) {
            const response = await axios({
                method: 'post',
                url: API_URL,
                data: JSON.stringify(data)
            });

            const res = response.data;
            console.log(res);
            setMsg(res[0].result);
            setTimeout(() => {
                setMsg('')
            }, 5000)
        }
        else {
            setMsg('Approval Operation is cancelled')
            setTimeout(() => {
                setMsg('')
            }, 5000);
        }
        fetchUserUploadImages();
    }

    const handleReject = async (id) => {

        console.log(id);

        const data = {
            id: id,
            username: null,
            email: null,
            password: null,
            operation: 'rejectImage'
        }

        if (window.confirm(rejectText) == true) {
            const response = await axios({
                method: 'post',
                url: API_URL,
                data: JSON.stringify(data)
            });

            const res = response.data;
            console.log(res);
            setMsg(res[0].result);
            setTimeout(() => {
                setMsg('')
            }, 5000)
        }
        else {
            setMsg('Reject Operation is cancelled')
            setTimeout(() => {
                setMsg('')
            }, 5000);
        }
        fetchUserUploadImages();
    }

    return (
        <>
            <ContentNavigation />
            <div className='searchWindow' style={{
                justifyContent: 'center'
            }}>
                <p style={{
                    margin:0
                }}>

                    {/* {
                        error !== "" ? <span className='error'>{error}</span> : <span className='success'>{msg}</span>
                    } */}
                Error / Message - <span className='error'>{error}</span> <span className='success'>{msg}</span>

                </p>
            </div>
            <ListOfUserUploadImg
                uImages={records}
                error={error}
                handleReject={handleReject}
                handleApprove={handleApprove}
            />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                recordsPerPage={recordsPerPage}
                setRecordPerPage={setRecordPerPage}
                npage={npage}
                firstIndex={firstIndex}
                lastIndex={lastIndex}
                reloadList={reloadList}
            />
        </>
    )
}

export default UserUploadImgList