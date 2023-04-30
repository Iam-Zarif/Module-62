import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayouts from "../Layout/NewsLayouts";
import News from "../Pages/News/News/News";
import LogIn from "../Pages/Home/Home/Shared/Header/LogIn/LogIn";
import Register from "../Pages/Home/Home/Shared/Header/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/catagories/:id",
        element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5022/catagories/${params.id}`),
      },
    ],
  },
  { path: "/login", element: <LogIn></LogIn> },
  { path: "/register", element: <Register></Register> },
  {
    path: "/news",
    element: <NewsLayouts></NewsLayouts>,
    children: [{ path: "/news/:id", element: <News></News> }],
  },
]);
export default router