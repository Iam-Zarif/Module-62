import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayouts from "../Layout/NewsLayouts";
import News from "../Pages/News/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/catagories/:id", element: <Category></Category> },
      {path:'news/:id', }
    ],
  },
  {path:'/news', element:<NewsLayouts></NewsLayouts>,
children:[
    {path : 'news/:id',element:<News></News>}
]
}
]);
export default router