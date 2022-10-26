import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../img/logo/logo-black.png";
import { userDocument } from '../../../sheredApi/SheredApi';
import logoWhite from '../../../img/logo/footer-logo.png';

const Footer = () => {
    const {togle} = useContext(userDocument);
    return (
        <div>
            
<footer className={
    togle 
    ? 
    "p-4 lg:mt-36 mt-24 shadow md:px-6 md:py-8 bg-slate-800"
    :
    "p-4 lg:mt-36 mt-24 shadow md:px-6 md:py-8 bg-slate-200"
}
    >
    <div className="sm:flex sm:items-center sm:justify-between">
        <Link to={''} className="flex items-center mb-4 sm:mb-0">
            <img src={togle ? logoWhite: logo} className="w-32" alt='' />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 dark:text-gray-400">
            <li>
                <Link to="#" className={togle ? "mr-4 hover:underline md:mr-6 text-white font-semibold" :"mr-4 hover:underline md:mr-6 text-slate-800 font-semibold"  }>About</Link>
            </li>
            <li>
                <Link to="#"  className={togle ? "mr-4 hover:underline md:mr-6 text-white font-semibold" :"mr-4 hover:underline md:mr-6 text-slate-800 font-semibold"  }>Privacy Policy</Link>
            </li>
            <li>
                <Link to="#"  className={togle ? "mr-4 hover:underline md:mr-6 text-white font-semibold" :"mr-4 hover:underline md:mr-6 text-slate-800 font-semibold"  }>Licensing</Link>
            </li>
            <li>
                <Link to="#"  className={togle ? "mr-4 hover:underline md:mr-6 text-white font-semibold" :"mr-4 hover:underline md:mr-6 text-slate-800 font-semibold"  }>Contact</Link>
            </li>
        </ul>
    </div>
    <hr  className={togle ? "mr-4 hover:underline md:mr-6 text-white font-semibold" :"mr-4 hover:underline md:mr-6 text-slate-800 font-semibold"  } />
    <span className="block text-sm text-amber-500 sm:text-center">© 2022 <Link to="https://flowbite.com/" className="hover:underline">Eduman</Link>. All Rights Reserved.
    </span>
</footer>

        </div>
    );
};

export default Footer;