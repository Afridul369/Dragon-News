import React from 'react'
import User from '../assets/user.png'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='w-10/12 mx-auto my-8 items-center  '>
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="flex gap-5 text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="flex items-center gap-5">
                <img src={User} alt=""  />
                <button className='btn btn-base-300 text-white rounded-none px-8'>Login</button>
            </div>
        </div>
      
    </div>
    
  )
}

export default Navbar
