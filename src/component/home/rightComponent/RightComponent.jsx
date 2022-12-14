import React, { useContext } from 'react';
import './RightComponent.css';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { userDocument } from '../../../sheredApi/SheredApi';
const RightComponent = () => {
    const {togle} = useContext(userDocument);
    return (
        <div className='rightbgimg lg:p-0 p-5'>
             <div>
                <h2 className='text-[#2467ec] text-lg font-semibold mb-3'>Discover your journey</h2>
                <h1 className={togle ? 'text-responsive text-[#c2d4f7] lg:text-5xl text-3xl font-semibold': 'text-responsive text-[#141517] lg:text-5xl text-3xl font-semibold'} style={{fontFamily: 'Raleway,sans-serif', lineHeight:'58px'}}>Discover 10+ Courses from top Instructors Around the World</h1>
                <p className='text-[#575757] text-lg font-medium mt-4'>Take your learning organization to the next level. to the next level. Who will share their knowledge to people around the world.</p>
               <Link to={'/category'}>
               <button className="btn btn-active mt-5 bg-[#2467ec] border-none hover:bg-[#a88b09]">View-all-course<BsArrowRight className='ml-1 text-xl'></BsArrowRight></button></Link>
            </div>
        </div>
    );
};

export default RightComponent;