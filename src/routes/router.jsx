import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Queries from "../Pages/Queries/Queries";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import RecommendationsForMe from "../Pages/RecommendationsForMe/RecommendationsForMe";
import MyQueries from "../Pages/MyQueries/MyQueries";
import MyRecommendations from "../Pages/MyRecommendations/MyRecommendations";
import PrivateRoute from "../Pages/Private/PrivateRoute";
import AddQueries from "../Pages/AddQueries/AddQueries";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
       loader:()=>fetch(`${import.meta.env.VITE_API_URL}/queries`)
      },
      {
        path: "/queries",
        element: <Queries />,
      },
      {
        path:'/login',
        element:<Login/>
      },{
        path:'/signUp',
        element:<SignUp/>
      },{
        path:'/recommendation',
        element:<PrivateRoute>
          <RecommendationsForMe/>
        </PrivateRoute>
      },{
        path:'/myQueries',
        element:<PrivateRoute>
          <MyQueries/>
        </PrivateRoute>
      },{
        path:'/myRecommendations',
        element:<PrivateRoute>
          <MyRecommendations/>
        </PrivateRoute>
      },{
        path:'/addQueries',
        element:<PrivateRoute>
          <AddQueries/>
        </PrivateRoute>

      }
    ],
  },
])
