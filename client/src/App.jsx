
import HomePage from "./routes/homePage/home"
import ListPage from "./routes/listPage/list"
import SinglePage from "./routes/singlePage/single"
import ProfilePage from "./routes/profilePage/profilePage"
import { createBrowserRouter,RouterProvider, } from "react-router-dom"
import Layout from './routes/layout/layout'

// anji test
function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        }
      ]
    }
  ]);
  return (
    

    <RouterProvider router={router}/>
    
  )
}

export default App