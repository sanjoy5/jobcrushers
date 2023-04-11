import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blogs/Blog';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import FeaturedJobsDetails from './Components/FeaturedJobs/FeaturedJobsDetails';
import ErrorPage from './ErrorPage';
import AllJobs from './Components/FeaturedJobs/AllJobs';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/featuredjobs.json')
      },
      {
        path: "/job-details/:jobid",
        element: <FeaturedJobsDetails></FeaturedJobsDetails>,
        loader: () => fetch('/featuredjobs.json')
      },
      {
        path: "/alljobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch('/featuredjobs.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/assignmentmarks.json')
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/featuredjobs.json')
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      },
    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
