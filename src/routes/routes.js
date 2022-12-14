import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../components/checkout/checkout";
import Course from "../components/courses/course";
import CourseDetails from "../components/course_details/coursedetails";
import FAQ from "../components/faq/faq";
import LogIn from "../components/login/login";
import NotFound from "../components/notfound 404/notfouund";
import Register from "../components/register/register";
import Main from "../layout/main";
import Blog from './../components/blog/blog';
import PrivateRoute from './privateroutes';

export const route = createBrowserRouter([
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
          path:"/coursedetails/:id",
          element: <CourseDetails />,

        },
        {
          path:`checkout/:id`,
          element:<PrivateRoute> <CheckOut /></PrivateRoute>
        },
        {
          path:"/faq",
          element: <FAQ />
        },
        {
          path:"/blog",
          element: <Blog />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ],
    }
    
  ])