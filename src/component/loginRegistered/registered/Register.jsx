import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userDocument } from '../../../sheredApi/SheredApi';

const Register = () => {
    // Show password 
    const [show, setShow] = useState(true);
    const showPassword = ()=>{
        setShow(!show);
    }
    // use context 
    const {createUserEmailAndPassword, UpdateUser, sendEmailverify}= useContext(userDocument);
    const navigate = useNavigate();
    // register user
    const registerUser= (event)=>{
        event.preventDefault();
        const target = event.target;
        const email = target.email.value;
        const password = target.password.value;
        const userName = target.name.value;
        createUserEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // set user name
            hendleUpdateUser(userName);
            sendEmailverify();
            target.reset();
            toast.success("User Create Success full, Check your email spam folder and verify your email address");
            // navigate user
            navigate('/login');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            // ..
          });
        console.log(userName, password, email);
    }

    // Update user
    const hendleUpdateUser = (userName) =>{
        const updateUser = {
         displayName: userName,
        }
        UpdateUser(updateUser);
 }

    return (
        <div>
        <div className="hero min-h-screen">
<div className="hero-content flex-col">
<div className="card flex-shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
  <h1 className="text-2xl font-bold text-slate-800">Register-Now</h1>
 <form onSubmit={registerUser}>
 <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input name='name' type="text" placeholder="name" className="input input-bordered" required/>
    </div>
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
        <input onClick={showPassword} type="checkbox" id="show" name="vehicle1" value="Bike" />
        <label className='label label-text-alt link link-hover' htmlFor='show'>Show Password</label>
        </div>
     <div>
        <label className="label">
            <Link to="#" className="label-text-alt link link-hover">Login</Link>
        </label>
     </div>
      </div>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary" type='submit'>register</button>
    </div>
 </form>
  </div>
</div>
</div>
</div>
    </div>
    );
};

export default Register;