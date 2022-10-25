import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import Category from './category/Category';
import CourseCard from './courseCard/CourseCard';

const Course = () => {
    const data = useLoaderData();
    console.log(data.length);
    if(data.length > 0){
      return <div>
         <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto gap-9 mt-9 -z-50'>
            {
              data.map(course=><CourseCard key={data.id} course={course}></CourseCard>) 
            }
        </div>
       </div>
    }
    return (
            <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto gap-9 mt-9 -z-50'>
            {
                <CourseCard key={data.id} course={data}></CourseCard>
            }
        </div>
    );
};

export default Course;