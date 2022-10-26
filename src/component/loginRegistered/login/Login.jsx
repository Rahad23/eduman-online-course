import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { userDocument } from '../../../sheredApi/SheredApi';
import { toast } from 'react-toastify';

const Login = () => {
    // togle show password 
    const [show, setShow]=useState(true);
    const passwordShow = ()=>{
        setShow(!show);
    }
    // use context 
    const {userLogin} = useContext(userDocument);

  // use location
  const location = useLocation();
  const from = location?.state?.from.pathname || '/';
const navigate = useNavigate();
    const loginUser = (event)=>{
        event.preventDefault();
        const target = event.target;
        const email = target.email.value;
        const password = target.password.value;
        userLogin(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            toast.success("Login success full");
            // navigate('/');
            navigate(from, {replace: true});
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
        console.log(email, password)
    }

    return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="card flex-shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-2xl font-bold text-slate-800">Login now!</h1>
     <form onSubmit={loginUser}>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type={show ? "password": "text"} placeholder="password" className="input input-bordered" required/>
          <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center'>
            <input onClick={passwordShow} type="checkbox" id="show" name="vehicle1" value="Bike" />
            <label className='label label-text-alt link link-hover' htmlFor='show'>Show Password</label>
            </div>
         <div>
            <label className="label">
                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
            </label>
         </div>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Login</button>
        </div>
     </form>
        <div className='mt-2'>
        <p className='text-slate-900 font-bold'>Don't have an account? <Link to={'/register'} className='text-[#f9a51a] label-text-alt link link-hover text-sm'>Create An Account</Link></p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;