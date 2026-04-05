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
import Error404 from "../components/Error404";

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
    element: <Error404></Error404>
  },
  {
    path: "/about",
    element: <Error404></Error404>
  },
  {
    path: "/career",
    element: <Error404></Error404>
  },
]);