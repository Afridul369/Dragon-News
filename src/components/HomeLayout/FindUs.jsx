import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { TiSocialFacebook } from 'react-icons/ti'

const FindUs = () => {
  return (
    <div>
        <h1 className='font-bold mb-2'>Find Us On</h1>
        <div className="join join-vertical w-full ">
            <button className="btn  bg-base-100 border-accent border justify-start gap-3 join-item "><span className='rounded-4xl p-1  bg-gray-300'><TiSocialFacebook className='text-blue-600' size={20}/></span>Facebook</button>
            <button className="btn  bg-base-100 border-accent border justify-start gap-3 join-item "><span className='rounded-4xl p-1  bg-gray-300'><FaTwitter className='text-blue-400' size={18}/></span>Twitter</button>
            <button className="btn  bg-base-100 border-accent border justify-start gap-3 join-item "><span className='rounded-4xl p-1  bg-gray-300'><FaInstagram  className='text-blue-600' size={20}/></span>Instagram</button>
        </div>
      
    </div>
  )
}

export default FindUs
