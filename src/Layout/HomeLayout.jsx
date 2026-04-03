import React from 'react'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import LeftAside from '../components/HomeLayout/LeftAside'
import RightAside from '../components/HomeLayout/RightAside'


const HomeLayout = () => {
  return (
    <div>
        <section>
            <Header></Header>
        </section>
        <section>
            <LatestNews></LatestNews>
        </section>
        <nav>
            <Navbar></Navbar>
        </nav>
        <main className='w-10/12 mx-auto my-8 grid grid-cols-12 gap-5 '>           
              <aside className='col-span-3'>
                  <LeftAside></LeftAside>
              </aside>
            <div className="main-middle col-span-6">
                <Outlet></Outlet>
            </div>          
              <aside className='col-span-3'>
                  <RightAside></RightAside>
              </aside>
        </main>
      
    </div>
  )
}

export default HomeLayout
