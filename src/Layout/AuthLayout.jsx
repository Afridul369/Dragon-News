import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#f3f3f3]">
        <div className='w-10/12 mx-auto  '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default AuthLayout
