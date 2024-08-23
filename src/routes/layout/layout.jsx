import React from 'react'
import Navbar from "../../components/navbar"
import { Outlet } from 'react-router-dom'
import '../layout/layout.scss'
function layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>

      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default layout