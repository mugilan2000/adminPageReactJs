import React, { useEffect, useState } from 'react'
import ContentNavigation from './ContentNavigation'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './css/viewImage.css';

const ViewImage = ({ API_URL, viewImage_URL }) => {

    const { id } = useParams();
    const [fileName, setFileName] = useState('');

    document.title = "View Image"

    let [filePath, setFilePath] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(!sessionStorage.getItem('isLoggedIn')){
          navigate('/')
        }
      })

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

    const downloadFile = async (viewImage_URL, fileName, e) => {
        //e.preventDefault();
        const url = "http://localhost/react/downloadImage.php?file="+fileName;
        //console.log(url)

        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

        
    }
    return (
        <>
            <ContentNavigation />
            <div>
                <img src={viewImage_URL + fileName} className='loadimg' id='viewimg'></img>
                
            </div>
            <button className='downloadBtn' onClick={()=>{downloadFile(viewImage_URL, fileName)}}>Download</button>
        </>
    )
}

export default ViewImage