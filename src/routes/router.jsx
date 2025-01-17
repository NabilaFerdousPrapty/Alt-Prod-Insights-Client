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
import QueryDetails from "../Pages/QueryDetails/QueryDetails";
import AddRecomendation from "../Pages/AddRecomendation/AddRecomendation";
import UpdateData from "../Pages/Update/UpdateData";
import ViewDetails from "../Pages/View/ViewDetails";
import AllRecomendation from "../Pages/AllRecomendations/AllRecomendation";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/queries`),
      },
      {
        path: "/queries",
        element: <Queries />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/queries`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/recommendation",
        element: (
          <PrivateRoute>
            <RecommendationsForMe />
          </PrivateRoute>
        ),
      },
      {
        path: "/myQueries",
        element: (
          <PrivateRoute>
            <MyQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/myRecommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations />
          </PrivateRoute>
        ),
      },
      {
        path: "/addQueries",
        element: (
          <PrivateRoute>
            <AddQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/queries/:id",
        element: (
          <PrivateRoute>
            <QueryDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`,{
            credentials:'include'
          })
        ,
      },
      {
        path: "/meRecommendations/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/meRecommendations/${params.id}`,{
              credentials:'include'
            }
          ),
      },
      {
        path: "/myQueries/:id",
        element: (
          <PrivateRoute>
            <QueryDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/myQueries/${params.id}`,{
            credentials:'include'
          }),
      },
      {
        path: "/myQueries/update/:id",
        element: (
          <PrivateRoute>
            <UpdateData></UpdateData>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/myQueries/${params.id}`,{
            credentials:'include'
          }),
      },
      {
        path: "/recommendations/delete/:id",
        deleteHandler: ({ params }) => {
          const queryId = params.id;
          fetch(`${import.meta.env.VITE_API_URL}/myQueries/delete/${queryId}`, {
            method: "DELETE",
          },
          {credentials:'include'}
        )
            .then((response) => {
              if (response.ok) {
                // console.log("Query deleted successfully");
              } else {
                // console.error("Failed to delete query");
              }
            })
            .catch((error) => {
              console.error("Error deleting query:", error);
            });
        },
      },
      {
        path: "/myRecommendations/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/myQueries/${params.id}`,
          {credentials:'include'}
          ),
      },
      {
        path: "/allRecommendations/:id",
        element: (
          <PrivateRoute>
            <AllRecomendation></AllRecomendation>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/allRecommendations/${params.id}`
        ,{credentials:'include'}
        )
       
      },
    ],
  },
]);
