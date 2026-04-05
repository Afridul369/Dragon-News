import React from 'react'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'
import { Outlet, useNavigation } from 'react-router'
import LeftAside from '../components/HomeLayout/LeftAside'
import RightAside from '../components/HomeLayout/RightAside'
import Loading from '../components/Loading'


const HomeLayout = () => {
    const {state} = useNavigation()
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
              <aside className='col-span-3 sticky top-2 h-fit'>
                  <LeftAside></LeftAside>
              </aside>
            <div className="main-middle col-span-6">
                {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>} 
            </div>          
              <aside className='col-span-3 sticky top-2 h-fit'>
                  <RightAside></RightAside>
              </aside>
        </main>
      
    </div>
  )
}

export default HomeLayout
