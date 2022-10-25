import React from 'react';
import LeftComponent from './leftComponent/LeftComponent';
import RightComponent from './rightComponent/RightComponent';

const Home = () => {
    return (
        <div className='lg:grid lg:mt-28 mt-5 container mx-auto flex flex-col' style={{gridTemplateColumns: "2fr 3fr"}}>
            <div>
                <RightComponent></RightComponent>
            </div>
            <div>
                <LeftComponent></LeftComponent>
            </div>
        </div>
    );
};

export default Home;