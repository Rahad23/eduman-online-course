import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Category = () => {
  const categoryAll = useLoaderData();
  // console.log(categoryAll);
    return (
        <div className='grid' style={{gridTemplateColumns: "1.5fr 4fr"}}>
           <div className='p-5'>
           {
              categoryAll.map(cate=><Link to={cate.id}><button key={cate.id} className="btn btn-secondary w-full mb-1">{cate?.name}</button></Link>)
            }
            
           </div>
           <div>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Category;