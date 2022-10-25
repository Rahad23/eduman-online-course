import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shareComponet/footer/Footer';
import Header from '../shareComponet/header/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;