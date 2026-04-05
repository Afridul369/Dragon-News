import { use } from 'react'
import User from '../assets/user.png'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'

const Navbar = () => {
  const {user,logOut} = use(AuthContext)
  // console.log(user)
  const handleSignOut =()=>{
    logOut()
    .then(()=>{
      alert('User Log Out Successfully')
    })
    .catch((error)=>{
      alert(error)
    })  
  }
  return (
    <div className='w-10/12 mx-auto py-8 items-center  '>
        <div className="flex justify-between items-center">
            <div className="">{user && user.email}</div>
            <div className="flex gap-5 text-accent">
                <NavLink className={'py-3 px-4 rounded-md bg-gray-200 hover:scale-105 duration-150'} to={'/'}>Home</NavLink>
                <NavLink className={'py-3 px-4 rounded-md bg-gray-200 hover:scale-105 duration-150'} to={'/about'}>About</NavLink>
                <NavLink className={'py-3 px-4 rounded-md bg-gray-200 hover:scale-105 duration-150'} to={'/career'}>Career</NavLink>
            </div>
            <div className="flex items-center gap-5">
                <img className='w-12 rounded-full' src={`${user ? user.photoURL : User}`} alt=""  />
                {
                  user ? (<button onClick={handleSignOut} className='btn btn-base-300 text-white rounded-none px-8'>Log Out</button>) 
                  : (<button  className='btn btn-base-300 text-white rounded-none px-8'><Link to={'/auth/login'}>Login</Link></button>)
                }
                
            </div>
        </div>
      
    </div>
    
  )
}

export default Navbar
