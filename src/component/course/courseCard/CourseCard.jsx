import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {details, subject, id, price,support,techer,totalStudent,courseTime }= course;
    // console.log(details);
    const cutDetails = details.slice(0, 210)+ "...";
    
    console.log(course);
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={course?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                    <h2 className="card-title">
                    {course?.subject}
                    </h2>
                    <div>
                        <p className='text-black font-semibold'>Teacher: <span className='text-green-700 font-bold'>{techer}</span></p>
                    </div>
                    </div>
                    <p>{cutDetails}<Link to={`/readmore/${id}`} className="text-black p-1 rounded-full p-1 bg-green-600 hover:bg-green-400 font-semibold">Read-More</Link></p>
                    <div className="card-actions justify-between">
                        <div>
                            <p className='text-[#0772ca] text-2xl font-bold'>${price}</p>
                        </div>
                    <div>
                    <div className="badge badge-outline ml-2">Course</div> 
                    <div className="badge badge-outline">{subject}</div>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default CourseCard;