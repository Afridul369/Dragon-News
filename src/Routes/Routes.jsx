import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
        loader: ()=> fetch('/news.json')
      },
    ] 
  },
  {
    path: "/auth",
    element: <div>Hello authentication</div>,
  },
  {
    path: "/news",
    element: <div>Hello World of news</div>,
  },
]);