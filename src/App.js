import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { route } from './routes/routes';
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <div>
        <RouterProvider router={route}/>
        <ToastContainer />

    </div>
  );
}

export default App;
