import React from 'react'
import Logo from '../assets/logo.png'
import '../app.css'
import { format } from 'date-fns'

const Header = () => {
  return (
    <div className='w-10/12 mx-auto my-5 items-center flex flex-col justify-center gap-4'>
        <img src={Logo} alt="" />
        <p className='text-accent'>Journalism Without Fear or Favour</p>
        {format (new Date(), 'EEEE, MMMM MM , yyyy')}
    </div>
  )
}

export default Header
