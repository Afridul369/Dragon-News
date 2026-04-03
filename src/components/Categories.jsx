import React, { use } from 'react'
import { NavLink } from 'react-router';
const categoriess =  fetch('/categories.json').then(res => res.json())

const Categories = () => {
    const categories = use(categoriess)
    // console.log(categories);
  return (
    <div>
        <h1 className='font-bold'>All Categories {categories.length}</h1>
        <div className="grid grid-cols-1 gap-2 mt-4">
            {
                categories.map(category => <NavLink 
                    key={category.id}
                    className={'btn bg-base-100 text-accent border-0 shadow-none hover:bg-base-200 font-semibold'}
                    to={`/categories/${category.id}`}
                >{category.name}</NavLink>)
            }
        </div>
    </div>
  )
}

export default Categories
