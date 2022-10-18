import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';



const Register = () => {
   const { createUser, signInWithGoogle } = useContext(AuthContext)
   // console.log('createUser', createUser);
   const handleSubmit = (event) => {
      event.preventDefault()

      const form = event.target
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password)

      createUser(email, password)

         .then(res => {
            const user = res.user;
            console.log('Register user', user)
            form.reset()
         })
         .catch(error => {
            console.error('error :', error);
         })
   }

   //google signIn
   const handleGoogleSignIn = () => {
      signInWithGoogle()
         .then((result => {
            const user = result.user
         }))
         .catch(error => console.error(error));
   }
   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col">
            <h1 className="text-5xl font-bold">Please Register Now!</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input type="text" name='name' placeholder="Input your name" className="input input-bordered" required />
                  </div>
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
                        <p >
                           <small>
                              Already have an account?<Link to='/login' className='btn btn-link text-xs p-1' >Login</Link>
                           </small>
                        </p>

                     </label>
                  </div>
                  <div className="form-control mt-2">
                     <button className="btn btn-primary">Register</button>
                  </div>
                  <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary'>Google</button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;

