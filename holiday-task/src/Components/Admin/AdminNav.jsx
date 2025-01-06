import React from 'react'
import {Link, NavLink } from "react-router-dom"

function AdminNav() {
  return (
    <>
      <div className='admin-navbar contain'>
        <div className='nav-left'>
          <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
        </div>
        <div className='links'>
          <Link className='lk'>Dashboard</Link>
          <NavLink className={({ isActive }) =>isActive ? "active" : "lk" } to={"adminproducts"}>Product</NavLink>
          <NavLink className={({ isActive }) =>isActive ? "active" : "lk" } to={"addproduct"}>Addproduct</NavLink>
          <NavLink className={({ isActive }) =>isActive ? "active" : "lk" } to={"editproduct"}>EditProduct</NavLink>
          <NavLink className={({ isActive }) =>isActive ? "active" : "lk" } to={`admindetail/:id`}>AdminDetail</NavLink>
        </div>
      </div>
      <hr style={{marginBottom:"70px"}}/>
      
    </>

  )
}

export default AdminNav
