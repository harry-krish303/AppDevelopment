import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Patient Management</li>
        <li>Appointment Scheduler</li>
        {/* Add more sidebar items */}
      </ul>
    </div>
  );
}

export default Sidebar;
