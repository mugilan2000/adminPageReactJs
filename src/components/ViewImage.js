import React, { useEffect } from 'react'
import ContentNavigation from './ContentNavigation'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ViewImage = ({API_URL}) => {

    const {id} = useParams();

    useEffect(() => {
        const fetchImageToView = async () => {
            const userData = {
                id: id,
                username: null,
                email: null,
                password: null,
                operation: 'fetchImageToView'
            }
            console.log(JSON.stringify(userData))
            try {
                const response = await axios({
                    method: 'post',
                    url: API_URL,
                    data: JSON.stringify(userData)
                })

                const res = response.data;
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
    </>
  )
}

export default ViewImage