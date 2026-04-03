import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SocialLogin = () => {
  return (
    <div>
        <h1 className='font-bold'>Login With</h1>
        <button className='btn btn-outline btn-secondary w-full mt-4'> <FcGoogle size={24}/>Login With Google</button>
        <button className='btn btn-outline btn-primary w-full mt-4'><FaGithub size={24}/> Login With Github</button>
      
    </div>
  )
}

export default SocialLogin
