import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { route } from './routes/routes';

function App() {
  

  return (
    <div className="App">
        <RouterProvider router={route}/>
    </div>
  );
}

export default App;
