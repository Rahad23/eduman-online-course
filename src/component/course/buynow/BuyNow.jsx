import React, { useContext } from 'react';
import { userDocument } from '../../../sheredApi/SheredApi';
import { useLoaderData } from 'react-router-dom';

const BuyNow = () => {
    const {userData} = useContext(userDocument);
    // courseDetails
    const data = useLoaderData();
    const {techer,subject,support,price} = data;
    return (
        <div className='flex justify-center items-center h-[700px]'>
    <div className="card w-[700px] bg-base-100 shadow-xl">
    <h1 className='text-3xl text-black font-semibold text-center mb-5'>Course details read carefully</h1>
        <div className="card-body">
            <div className='flex justify-between'>
            <div>
            <h2 className="card-title">
                Name: <span className='text-emerald-600'>{userData?.displayName}</span>
            </h2>
            </div>
            <div>
            <p className='text-black font-semibold'>USER-ID: <span className='text-sky-700'>{userData?.uid}</span></p>
            </div>
            </div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Teacher</th>
        <th>Subject</th>
        <th>Support</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>{techer}</td>
        <td>{subject}</td>
        <td>{support}</td>
        <td>${price}</td>
      </tr>
    </tbody>
  </table>

</div>
        </div>
        <h1 className='ml-10 mb-3 text-cyan-800 hover:text-red-700 cursor-pointer font-bold'><i>Payment-Now</i></h1>
        </div>
        </div>
    );
};

export default BuyNow;