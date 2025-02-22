import React from 'react'
import { NavLink } from 'react-router-dom'



function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#37517e' }}>
      <div className="container">
        <NavLink className="navbar-brand" to="/home">Admin Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>    
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/DisburstmentShow">Disburstment Show Details</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/ShowFeedback">FeedBack Details</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar