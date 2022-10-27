import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../../img/logo/logo-black.png';
import { CiLight} from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { userDocument } from '../../../../sheredApi/SheredApi';
import logoWhite from '../../../../img/logo/footer-logo.png';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
// user context
const {userData, userSingnOut, click, togle} = useContext(userDocument);
// use navigate
const navigate = useNavigate();
// user sign out
const signOUt=()=>{
    userSingnOut()
    .then(() => {
        navigate('/login');
    })
    .catch((error) => {});
}
console.log(userData)
    return (
        <div className='lg:sticky lg:top-0 z-50'>



    <div className={togle? "bg-slate-900":"bg-stone-300" }>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >

            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                <img src={togle? logoWhite : logo} className="w-30" alt="" />
            </span>
          </Link>
<div className='flex justify-between w-full'>
<ul className="flex items-center hidden space-x-8 lg:flex ml-14">
            <li>
              <Link
                to="/"
                aria-label="home"
                title="home"
                className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400 hover:text-slate-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/category"
                aria-label="courses"
                title="courses"
                className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400 hover:text-slate-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/"
                aria-label="FAQ"
                title="FAQ"
              className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400 hover:text-slate-400"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="blog"
                title="blog"
                className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400 hover:text-slate-400"
              >
                Blog
              </Link>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
            <ReactTooltip />
                {
                    userData && userData?.uid? <div className='flex justify-between items-center'>
                        <img title={userData?.displayName} className='w-8 rounded-full' src={userData?.photoURL ? userData?.photoURL : 'https://imagez.tmz.com/image/d0/1by1/2022/09/16/d061305dc734448f95caeb0c10f0e614_xl.jpg'} alt="" />
                        <p className={togle ? 'ml-1 text-white font-semibold' : 'ml-1 text-black font-semibold'}>{userData?.displayName}</p>
                        <>
                          <button onClick={signOUt} className="btn btn-xs ml-2">Logout</button>
                        </>
                    </div>
                    :
            <Link to={'/login'}>
                 <button className="btn btn-sm">Login</button>
             </Link>
                }
             
            </li>
            <li onClick={click}>
                {
                    togle ? <CiLight title="Light Mode" className={togle ? 'text-3xl cursor-pointer text-white font-bold' : 'ml-1 text-black font-semibold'}></CiLight> 
                    :               
                    <MdDarkMode title='Dark Mode' className='text-3xl cursor-pointer text-black'></MdDarkMode>
                }


            </li>
          </ul>
</div>
          <div className="lg:hidden z-50">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          <img src={logo} className="w-30" alt="" />
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="home"
                          title="home"
                          className={
                            togle ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" 
                            :
                            "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/category"
                          aria-label="course"
                          title="course"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                           Courses
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="FAQ"
                          title="FAQ"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a
                          href="/blog"
                          aria-label="blog"
                          title="blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </a>
                      </li>
                      <div className='flex'>
                      <li>
                      <ReactTooltip />
                {
                    userData && userData?.uid? <div className='flex justify-between items-center'>
                        <img title={userData?.displayName} className='w-8 rounded-full' src={userData?.photoURL ? userData?.photoURL : 'https://imagez.tmz.com/image/d0/1by1/2022/09/16/d061305dc734448f95caeb0c10f0e614_xl.jpg'} alt="" />
                        <p className={togle ? 'ml-1 text-black font-semibold' : 'ml-1 text-black font-semibold'}>{userData?.displayName}</p>
                        <>
                          <button onClick={signOUt} className="btn btn-xs ml-2">Logout</button>
                        </>
                    </div>
                    :
            <Link to={'/login'}>
                 <button className="btn btn-sm">Login</button>
             </Link>
                }
            </li>
            <li onClick={click} className="ml-10">
                {
                    togle ? <CiLight className='text-3xl cursor-pointer'></CiLight> 
                    :               
                    <MdDarkMode className='text-3xl cursor-pointer'></MdDarkMode>
                }


            </li>
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>


        </div>

)};

export default Header;