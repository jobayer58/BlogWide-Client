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
import WishListDetails from './Pages/WishList/WishListDetails';

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
        element: <PostBlogDetails></PostBlogDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      },
      {
        path: '/wishList/details/:id',
        element: <WishListDetails></WishListDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/wishList/${params.id}`)
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
