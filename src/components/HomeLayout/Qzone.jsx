import React from 'react'
import swim from '../../assets/swimming.png'
import play from '../../assets/playground.png'
import classs from '../../assets/class.png'


const Qzone = () => {
  return (
    <div className='p-4 bg-[#f3f3f3]'>
        <h1 className='font-bold mb-5'>QZone</h1>
        <div className="space-y-4">
            <img src={swim} className='w-full' alt="" />
            <img src={classs} className='w-full' alt="" />
            <img src={play} className='w-full' alt="" />
        </div>
        
    </div>
  )
}

export default Qzone


