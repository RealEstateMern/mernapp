import HomePage from "./routes/homePage/home";
import ListPage from "./routes/listPage/list";
import SinglePage from "./routes/singlePage/single";
import ProfilePage from "./routes/profilePage/profilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./routes/layout/layout";
import Register from "./routes/register/register";
import Login from "./routes/login/login";
import ProfileUpdatePage from "./routes/profileUpdate/profileUpdatePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
