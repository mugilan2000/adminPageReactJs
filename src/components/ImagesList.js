import React, { useEffect, useState } from 'react'
import ContentNavigation from './ContentNavigation'
import axios from 'axios';
import ListOfImages from './ListOfImages';
import excelIcon from '../excel_icon.svg';
import { Link } from 'react-router-dom';
import './css/imagelist.css';
import UpdateAdminPwdInputs from './UpdateAdminPwdInputs';
import Pagination from './Pagination';

const ImagesList = ({ upload_image_URL, API_URL }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [username, setUsername] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordPerPage] = useState(5);
  
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = images.slice(firstIndex, lastIndex);
  const npage = Math.ceil(images.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  let text = "Are you sure want to delete the image?";

  const fetchImages = async () => {

    const userData = {
      id: null,
      username: null,
      email: null,
      password: null,
      operation: 'imageslist'
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
      setImages(res);
      console.log(res);
    }
  }
  useEffect(() => {

    fetchImages();
  }, [])

  const handleUploadImage = async (e) => {
    e.preventDefault();

    if(selectedFile !== ""){
      const formData = new FormData();
      formData.append('selectedFile', selectedFile)
  
      const response = await axios({
          method: 'post',
          headers: {'Content-Type':"multipart/form-data"},
          url: upload_image_URL,
          data: formData
      });
  
      const res = response.data;
  
      if (res[0].result === "File not uploaded successfully" || res[0].result === "File not received") {
        setError(res[0].result);
        setSelectedFile('');
      }
      else {
        setMsg(res[0].result);
        setSelectedFile('');
        document.getElementsByName("file")[0].value = null;
        setTimeout(()=> {
          setMsg('')
        }, 5000);
        fetchImages();
      }
    }
    else{
      setError("Please select file");
      setTimeout(()=> {
        setError('')
      }, 5000);
    }
  }

  const handleInputChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleImageDelete = async (id) => {
      console.log(id);

      const imageDeleteId = {
        id: id,
        username: null,
        email: null,
        password: null,
        operation: 'deleteImage'
      }

      if(window.confirm(text) == true){
        const response = await axios({
          method: 'post',
          url: API_URL,
          data: JSON.stringify(imageDeleteId)
        });
    
        const res = response.data;
        console.log(res);
        setMsg('File - ' + res[0].filename + ' Deleted Successfully');
        setTimeout(() => {
          setMsg('')
        }, 5000)
      }
      else{
        setMsg('Image delete operation is cancelled')
        setTimeout(()=> {
          setMsg('')
        }, 5000);
      }
      fetchImages();
  }

  const reloadList = async() => {
      await fetchImages();
  }
  return (
    <>
      <ContentNavigation />
      <div className='searchWindow'>
        <form onSubmit={handleUploadImage} id='uploadForm'>
          <input type='file' name='file' onChange={handleInputChange} />
          <button className='uploadbtn'>Upload</button>
        </form>
        <p>

                {
                    error !== "" ? <span className='error'>{error}</span> : <span className='success'>{msg}</span>
                }
            </p>
        <Link><img src={excelIcon} alt='excelIcon' className='excelicon' role='button'></img> </Link>
      </div>
      <ListOfImages
        images={records}
        error={error}
        handleImageDelete = {handleImageDelete}
      />
      <Pagination 
      currentPage = {currentPage}
      setCurrentPage = {setCurrentPage}
      recordsPerPage = {recordsPerPage}
      setRecordPerPage = {setRecordPerPage}
      npage = {npage}
      firstIndex={firstIndex}
      lastIndex={lastIndex}
      reloadList = {reloadList}
      />
    </>
  )
}

export default ImagesList