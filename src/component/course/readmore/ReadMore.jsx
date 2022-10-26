import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Document, Page } from 'react-pdf';
const ReadMore = () => {
    const read = useLoaderData();
    const { img, price,support,techer,totalStudent,courseTime,subject,details, id} = read;
    console.log(read);
    // pdf download function
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob()
            .then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
   
    return (
        <div className='flex justify-center mt-24'>
            <div>
              <button onClick={onButtonClick} className="btn btn-xs">Download</button>
            </div>
            <div className="card w-[500px] bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <div className='flex justify-between items-center'>
            <h2 className="card-title text-teal-900">
            {subject}
            </h2>
           <div>
             <p className='text-black font-semibold'>Teacher: <span className='text-green-700 font-bold'>{techer}</span></p>
           </div>
           <div>
            <p className='text-[#000000] text-2xl font-bold'>Price: <span className='text-[#0772ca]'>${price}</span></p>
           </div>
            </div>
            <p>{details}</p>
            <div className="card-actions justify-between items-center">
            <Link to={`/category/${id}`}>
            <AiOutlineArrowLeft className='text-black text-2xl font-bold cursor-pointer hover:text-red-400'></AiOutlineArrowLeft>
             </Link>
              <Link to={`/buynow/${id}`}>
                 <button className="btn btn-active btn-secondary mt-2">Buy-Now</button>
              </Link>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ReadMore;