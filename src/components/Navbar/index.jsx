import React from 'react'
import { Outlet } from 'react-router-dom'
import Input from '../Generic/Input'
import Sidebar from '../Sidebar'
import './style.css'

const Navbar = () => {
  return (
    <>
    <div className='container'>
        <div><Sidebar/></div>
        <div className='outle'>
        <div className="DashboardWr">
      <div className="hello">Salom Sheroz 👋🏼,</div>
      <Input placeholder={"Search"} icon/>
    </div>
        <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Navbar