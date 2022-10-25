import { createBrowserRouter } from "react-router-dom";
import Category from "../component/course/category/Category";
import ReadMore from "../component/course/readmore/ReadMore";
import Home from "../component/home/Home";
import Main from "../component/main/Main";
import ErrorPage from "../component/shareComponet/errorpage/ErrorPage";
import Course from './../component/course/Course';

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category',
                element: <Category></Category>,
                loader: async()=>fetch('http://localhost:5000/category'),
                children:[
                    {
                        path: '/category/:id',
                        element: <Course></Course>,
                        loader: async({params})=>fetch(`http://localhost:5000/category/${params.id}`)
                    }
                ]
            },
            {
                path: '/readmore/:id',
                element: <ReadMore></ReadMore>,
                loader: async({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            }
            
        ]
    }
])