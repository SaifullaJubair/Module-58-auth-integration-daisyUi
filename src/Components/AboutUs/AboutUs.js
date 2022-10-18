import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const AboutUs = () => {
   const { user } = useContext(AuthContext)
   return (
      <div>
         <h3>This is About of {user.displayName} </h3>
      </div>
   );
};

export default AboutUs;