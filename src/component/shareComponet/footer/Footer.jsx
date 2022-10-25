import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../img/logo/logo-black.png";

const Footer = () => {
    return (
        <div>
            
<footer className="p-4 bg-white lg:mt-36 mt-24 shadow md:px-6 md:py-8 bg-slate-200">
    <div className="sm:flex sm:items-center sm:justify-between">
        <Link to={''} className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="w-32" alt='' />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 dark:text-gray-400">
            <li>
                <Link to="#" className="mr-4 hover:underline md:mr-6 text-slate-800 font-semibold">About</Link>
            </li>
            <li>
                <Link to="#" className="mr-4 hover:underline md:mr-6 text-slate-800 font-semibold">Privacy Policy</Link>
            </li>
            <li>
                <Link to="#" className="mr-4 hover:underline md:mr-6 text-slate-800 font-semibold">Licensing</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline text-slate-800 font-semibold">Contact</Link>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-amber-500 sm:text-center">© 2022 <Link to="https://flowbite.com/" className="hover:underline">Eduman</Link>. All Rights Reserved.
    </span>
</footer>

        </div>
    );
};

export default Footer;