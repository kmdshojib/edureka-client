import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { route } from './routes/routes';
// import Footer from './components/footer/footer';
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <div>
        <RouterProvider router={route}/>
        <ToastContainer />
        {/* <Footer className="mt-5 footer"/> */}
    </div>
  );
}

export default App;
