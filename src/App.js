import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components 
import Main from './layout/main';
import LogIn from './components/login/login';
import Register from './components/register/register';
import Course from './components/courses/course';
import CourseDetails from './components/course_details/coursedetails';
import CheckOut  from './components/checkout/checkout';



function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <Main />,
      children:[
        {
          path: "/",
          element: <Course />
        },
        {
          path:"/login",
          element: <LogIn />
        },
        {
          path:"/register",
          element: <Register />
        },
        {
          path:"/coursedetails/:name",
          element: <CourseDetails />,

        },
        {
          path:`checkout/`,
          element: <CheckOut />
        }
      ]
    }
  ])

  return (
    <div className="App">
        <RouterProvider router={route}/>
    </div>
  );
}

export default App;
