import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Login = () => {
   const { signIn } = useContext(AuthContext)
   // after successful logIn redirect in homepage
   const navigate = useNavigate()

   const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target;
      // name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      signIn(email, password)
         .then(res => {
            const user = res.user;
            console.log(user)
            form.reset()
            alert('Successful Login')
            navigate('/home')
         })
         .catch(error => console.error('error: ', error))
   }


   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col">
            <h1 className="text-5xl font-bold">Please Login now!</h1>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                     <label className="label">
                        <Link to='/register' className="label-text-alt link link-hover text-yellow-400">Don't have any account? Register</Link>
                     </label>
                  </div>
                  <div className="form-control mt-2">
                     <button className="btn btn-primary">Login</button>
                  </div>
               </form>
            </div>

         </div>
      </div >
   );
};

export default Login;

