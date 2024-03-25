import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import Jobs from './Components/Home/Jobs/Jobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AppliedJobs from './Components/ErrorPage/AppliedJobs/AppliedJobs';
import Statistics from './Statistics/Statistics';
import Blogs from './Statistics/Blogs/Blogs';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
      path: '/',
      element: <Home></Home>
    },
    {
      path:'/jobs',
      element: <Jobs></Jobs>
    },
    {
      path: '/applied',
      loader: ()=> fetch('/jobs.json'),
      element: <AppliedJobs></AppliedJobs>
    },
    {
      path: '/statistics',
      element: <Statistics></Statistics>
    },
    {
      path: "/blogs",
      element: <Blogs></Blogs>
    },
    {
      path: '/job/:id',
      loader: ()=> fetch('/jobs.json'),
      element: <JobDetails></JobDetails>
    }

  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
