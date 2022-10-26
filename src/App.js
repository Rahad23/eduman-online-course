import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/Router';
import { userDocument } from './sheredApi/SheredApi';

function App() {
  const {togle} = useContext(userDocument);
  return (
    <div className={togle ? "bg-black": "bg-white"}>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
