import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../components/checkout/checkout";
import Course from "../components/courses/course";
import CourseDetails from "../components/course_details/coursedetails";
import FAQ from "../components/faq/faq";
import LogIn from "../components/login/login";
import Register from "../components/register/register";
import Main from "../layout/main";
import Blog from './../components/blog/blog';

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
          element: <CheckOut />
        },
        {
          path:"/checkout",
          element: <h3 className="container mt-5 offset-3">No course is selected. please select course from course details page.</h3>
        },
        {
          path:"/faq",
          element: <FAQ />
        },
        {
          path:"/blog",
          element: <Blog />
        }
      ]
    }
  ])