import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Layout/NewsDetails";
import PrivateRouter from "../components/PrivateRouter";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children:[
      {
        path: "",
        Component: Home
      },
      {
        path: "/categories/:id",
        Component: CategoryNews,
        loader: ()=> fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
    ] 
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        Component: Login  
      },
      {
        path: "/auth/register",
        Component: Register  
      },
    ]
  },
  {
    path: "/news-details/:id",
    element: <PrivateRouter>
                <NewsDetails/>
            </PrivateRouter>,
    loader: ()=> fetch('/news.json'),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "*",
    element: <div>Error 404</div>,
  },
]);