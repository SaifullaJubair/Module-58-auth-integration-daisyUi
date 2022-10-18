import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
   const [user, setUser] = useState({});
   const [loading, setLoading] = useState(true);
   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }
   //signIn with google
   const googleProvider = new GoogleAuthProvider()
   const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider)
   }
   const logOut = () => {
      return signOut(auth)
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         console.log('auth state changed', createUser);
         setLoading(false)

      })
      return () => {
         unsubscribe();
      }
   }, [])


   const authIfo = { user, createUser, signIn, logOut, signInWithGoogle, loading }
   return (
      <div>
         <AuthContext.Provider value={authIfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default UserContext;