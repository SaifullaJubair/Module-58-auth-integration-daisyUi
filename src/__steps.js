/*
**Basic context API SetUp
1. Context API: Share auth state with other components (across the application)
2. create an UserContext
3. ContextProvider with passed children
4. set the UserContext in the index.js
5. Now to consume the context: export the AuthContext form userContext
6. Now at Header or  Home or anyWhere else: use useContext hook to get the info in the context
*/



/**
 * Auth Integration
 * Create a function named createUser to return createUserWithEmailAndPassword(auth,email,password)
 */