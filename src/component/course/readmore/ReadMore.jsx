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
        <div className='flex justify-center lg:flex-row lg:items-start flex-col  mt-24'>
            <div className='flex justify-center lg:w-24 w-full lg:mb-0 mb-5'>
              <button onClick={onButtonClick} className="btn btn-xs">Download</button>
            </div>
            <div className="card lg:w-[500px] w-[370px] bg-base-100 shadow-xl justify-center mx-auto">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <div className='flex justify-between items-center'>
            <h2 className="card-title text-teal-900">
            {subject}
            </h2>
           <div>
             <p className='text-black font-semibold'>Teacher: <span className='text-green-700 lg:font-bold font-semibold'>{techer}</span></p>
           </div>
           <div>
            <p className='text-[#000000] text-lg lg:font-bold font-semibold'>Price: <span className='text-[#0772ca]'>${price}</span></p>
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