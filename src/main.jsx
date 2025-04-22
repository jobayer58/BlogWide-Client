import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Login from './Pages/Authentication/Login';
import AllBlogs from './Pages/AllBlogs/AllBlogs';
import AddBlog from './Pages/AddBlog/AddBlog';
import Features from './Pages/Features/Features';
import Home from './Pages/Home/Home';
import WishList from './Pages/WishList/WishList';
import Register from './Pages/Authentication/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>not found</h1>,
    children: [
      {
        path: 'home',
        element: <Home></Home>
      },
      {
        path: 'addBlog',
        element: <AddBlog></AddBlog>
      },
      {
        path: 'features',
        element: <Features></Features>
      },
      {
        path: 'allBlogs',
        element: <AllBlogs></AllBlogs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'wishList',
        element: <WishList></WishList>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
