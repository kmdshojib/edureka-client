import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components 
import Main from './layout/main';
import LogIn from './components/login/login';
import Register from './components/register/register';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <Main />,
      children:[
        {
          path:"/login",
          element: <LogIn />
        },
        {
          path:"/register",
          element: <Register />
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
