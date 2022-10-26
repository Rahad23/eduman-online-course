import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/blog/Blog";
import BuyNow from "../component/course/buynow/BuyNow";
import Category from "../component/course/category/Category";
import ReadMore from "../component/course/readmore/ReadMore";
import Home from "../component/home/Home";
import Login from "../component/loginRegistered/login/Login";
import Register from "../component/loginRegistered/registered/Register";
import Main from "../component/main/Main";
import ErrorPage from "../component/shareComponet/errorpage/ErrorPage";
import PrivetRoute from "../privetRoute/PrivetRoute";
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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/buynow/:id",
                element: <PrivetRoute><BuyNow></BuyNow></PrivetRoute>,
                loader: async({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: "/blog",
                element:<Blog></Blog>
            }
        ]
    }
])