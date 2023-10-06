import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/AdminLogin';
import './components/css/login.css';
import AdminDashboard from './components/AdminDashboard';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

function App() {
  const API_URL = 'http://localhost/react/api.php';
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin API_URL={API_URL}/>} />
          <Route path='/dashboard' element={<AdminDashboard API_URL={API_URL}/>} />
          <Route path='/userslist' element={<UsersList API_URL={API_URL}/>} />
          <Route path='/adduser' element={<AddUser API_URL={API_URL}/>} />
          <Route path='/update/:id' element={<UpdateUser API_URL={API_URL}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
