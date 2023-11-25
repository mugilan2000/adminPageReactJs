import React, { useEffect, useState } from 'react'
import ContentNavigation from './ContentNavigation'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './css/viewImage.css';

const ViewImage = ({ API_URL, viewImage_URL }) => {

    const { id } = useParams();
    const [fileName, setFileName] = useState('');

    let [filePath, setFilePath] = useState('');

    useEffect(() => {
        const fetchImageToView = async () => {
            const userData = {
                id: id,
                username: null,
                email: null,
                password: null,
                operation: 'fetchImageToView'
            }
            //console.log(JSON.stringify(userData))
            try {
                const response = await axios({
                    method: 'post',
                    url: API_URL,
                    data: JSON.stringify(userData)
                })

                const res = response.data;
                //console.log(res[0].result)

                setFileName(res[0].result);
            }
            catch (e) {
                console.log(e);
            }
        }


        (async () => await fetchImageToView())()

    }, [])

    
    return (
        <>
            <ContentNavigation />
            <div>
                <img src={viewImage_URL + fileName} className='loadimg' id='viewimg'></img>
            </div>
        </>
    )
}

export default ViewImage