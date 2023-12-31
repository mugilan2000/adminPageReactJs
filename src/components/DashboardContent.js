import React, { useEffect, useState } from 'react'
import './css/dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashboardContent = ({API_URL}) => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalImages, setTotalImages] = useState(0);
    const [totalQueries, setTotalQueries] = useState(0);
    const [totalUserImages, setTotalUserImages] = useState(0);
    const [totalAdminUsers, setTotalAdminUsers] = useState(0);

    useEffect(() => {
    const fetchTotalUsers = async () =>{
        try{
            const dataToAPI = {
                id:null,
                username:null,
                email:null,
                password:null,
                operation:'fetchCount'
            }
            const response = await axios({
                method:'post',
                url: API_URL,
                data:JSON.stringify(dataToAPI)
            });
            const res1 = response.data;

            setTotalUsers(res1[0].totalUsers);
            setTotalImages(res1[0].totalImages);
            setTotalQueries(res1[0].totalQueries);
            setTotalUserImages(res1[0].totalUserImages);
            setTotalAdminUsers(res1[0].totalAdminUsers);
        } catch(err){
            if(err.response){
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            }
            else{
                console.log(`Error: ${err.message}`)
            }
        }
    }
    fetchTotalUsers();
},[])

    useEffect(() => {
        document.title="Admin Dashboard";
    }, []);
    return (
        <>
            <h4 className='adminTitle'>Welcome to Admin Panel</h4>
            <div className="menu row" id="menu">
                <div className="col-lg-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total Users -<span style={{
                                color: "black",
                            }}>{totalUsers}</span></h5>
                            <Link to="/userslist">View users</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total Images - <span style={{
                                color: "black"
                            }}>{totalImages}</span></h5>
                            <Link to="/imageslist">View Images</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total Queries - <span style={{
                                color: "black"
                            }}>{totalQueries}</span></h5>
                            <Link to="/querieslist">View Queries</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total User Upload Imgs - <span style={{
                                color: "black"
                            }}>{totalUserImages}</span></h5>
                            <Link to="/useruploadimageslist">View Images</Link>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total Admin Users - <span style={{
                                color: "black"
                            }}>{totalAdminUsers}</span></h5>
                            <Link to="/adminuserslist">View Users</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Manage Insta Post</h5>
                            <Link to="/">View Post</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Manage Stories</h5>
                            <Link to="/storieslist">View Stories</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardContent