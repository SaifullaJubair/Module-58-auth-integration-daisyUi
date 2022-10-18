import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
   const { user, logOut } = useContext(AuthContext);

   const handleSignOut = () => {
      logOut()
         .then(() => { })
         .catch(error => console.error(error));

   }

   return (
      <div>
         <div className="navbar bg-primary text-primary-content">
            <Link to='/' className="btn btn-ghost normal-case text-xl">DreamUI</Link>
            <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='about'>AbutUS</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/footer'>Footer</Link>
            {user?.email && <span>Welcome: {user.email}</span>}
            {
               user?.email ?
                  <button onClick={handleSignOut} className='btn btn-primary'>Log Out</button>
                  : <button className='btn btn-primary'>
                     <Link to={'/login'}>Log In </Link>
                  </button>
            }
         </div>
      </div>
   );
};

export default Header;