import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/AdminLogin';
import './components/css/login.css';
import AdminDashboard from './components/AdminDashboard';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import QueriesList from './components/QueriesList';
import { useState } from 'react';
import AddAdminUser from './components/AddAdminUser';
import AdminUsersList from './components/AdminUsersList';
import UpdateAdminusers from './components/UpdateAdminusers';
import UpdateAdminPwd from './components/UpdateAdminPwd';
import ImagesList from './components/ImagesList';
import ViewImage from './components/ViewImage';
import UserUploadImgList from './components/UserUploadImgList';
import StoriesList from './components/StoriesList';

function App() {
  const API_URL = 'http://localhost/react/api.php';
  const export_URL = 'http://localhost/react/export.php';
  const upload_image_URL = 'http://localhost/react/uploadImage.php';
  const viewImage_URL = 'http://localhost/react/Images/';

  //const API_URL = 'https://mugilanmsm.000webhostapp.com/server/api.php';
  //const export_URL = 'https://mugilanmsm.000webhostapp.com/server/export.php';
  //const upload_image_URL = 'https://mugilanmsm.000webhostapp.com/server/uploadImage.php';
  const isLoggedIn = window.localStorage.getItem("isLoggedIn")

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin
            API_URL={API_URL}
          />} />


          <Route path='/dashboard' element={<AdminDashboard API_URL={API_URL} />} />
          <Route path='/userslist' element={<UsersList API_URL={API_URL} export_URL = {export_URL} />} />
          <Route path='/adduser' element={<AddUser API_URL={API_URL} />} />
          <Route path='/querieslist' element={<QueriesList API_URL={API_URL} />} />
          <Route path='/addadminuser' element={<AddAdminUser API_URL={API_URL}/>} />
          <Route path='/adminuserslist' element={<AdminUsersList API_URL={API_URL}/>} />
          <Route path='/update/:id' element={<UpdateUser API_URL={API_URL} />} />
          <Route path='/adminupdate/:id' element={<UpdateAdminusers API_URL={API_URL} />} />
          <Route path='/updateadminpwd/:id' element={<UpdateAdminPwd API_URL={API_URL}/>} />
          <Route path='/imageslist' element={<ImagesList upload_image_URL={upload_image_URL} API_URL={API_URL}/>} />
          <Route path='/viewimage/:id' element={<ViewImage API_URL={API_URL} viewImage_URL={viewImage_URL}/>} />
          <Route path='/useruploadimageslist' element={<UserUploadImgList API_URL={API_URL}/>} />
          <Route path='/storieslist' element={<StoriesList API_URL={API_URL} />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
