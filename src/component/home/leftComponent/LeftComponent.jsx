import React from 'react';
import gif from "../../../img/gif/larning.gif";
import img from "../../../img/webImg/shape-04.png";
const LeftComponent = () => {
    return (
        <div className='lg:ml-28 flex lg:justify-between justify-center lg:flex-row flex-col items-center'>
            <div className='lg:mt-7 lg:ml-5'>
                <div className='bg-white shadow-xl lg:mb-0 mb-3 py-16 px-11 rounded-lg lg:text-center'>
                    <img src={img} alt=""/>
                    <h1 className='text-xl text-black font-semibold'>Top Rated Instructors</h1>
                </div>
            </div>
            <div>
                <img src={gif} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default LeftComponent;