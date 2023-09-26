import React from 'react';
import Sidebar from './SideBar';
import Navbar from './NavBar';
import './Dashboard.css';
import { selectUser } from '../Redux/userSlice';
import { useSelector } from 'react-redux';

function Dashboard() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'AK';
  // const username = localStorage.getItem('user');
  return (
    <>
    <Navbar />
    <Sidebar />
    <div className="dashboard">
      <div className="content">
      <h1>DashBoard of {username}</h1>
      
      <div className="grid-container">
      <div className="grid-list">
            <h2>Patients</h2>
            <div className="count">200</div>
        </div>
      <div className="grid-list">
            <h2>SAVED</h2>
            <div className="count">195</div>
        </div>
      <div className="grid-list">
            <h2>ICU</h2>
            <div className="count">05</div>
        </div>
        </div>
      </div>
    </div>
    </>
    );
}

export default Dashboard;
