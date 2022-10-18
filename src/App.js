import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main';
import Order from './Components/Orders/Order';
import Register from './Components/Register/Register';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/about',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/orders',
          element: <PrivateRoute><Order></Order> </PrivateRoute>
        },
        {
          path: '/footer',
          element: <Footer></Footer>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
