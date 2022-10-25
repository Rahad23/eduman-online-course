import { createBrowserRouter } from "react-router-dom";
import Home from "../component/home/Home";
import Main from "../component/main/Main";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])