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
import AuthProvider from './context/AuthProvider';
import ErrorPage from './Pages/Home/ErrorPage';
import PostBlogDetails from './Pages/Home/PostBlogDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateBlog from './Pages/AddBlog/UpdateBlog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs/details/:id',
        element: <PrivateRoute><PostBlogDetails></PostBlogDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://blog-wide-server.vercel.app/blogs/${params.id}`)
      },
      {
        path: 'addBlog',
        element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
      },
      {
        path: '/blogs/update/:id',
        element: <UpdateBlog></UpdateBlog>,
        loader: ({params}) => fetch(`https://blog-wide-server.vercel.app/blogs/${params.id}`)
      },
      {
        path: 'features',
        element: <PrivateRoute><Features></Features></PrivateRoute>
      },
      {
        path: 'allBlogs',
        element: <AllBlogs></AllBlogs>,
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
        element: <PrivateRoute><WishList></WishList></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
