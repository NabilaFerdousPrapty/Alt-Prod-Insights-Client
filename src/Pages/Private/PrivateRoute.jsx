import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div>
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>
        </div>
        <section className="">
          <div className="container px-6 py-10 mx-auto animate-pulse">
            <h1 className="w-40 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

            <p className="w-64 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-48 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex flex-col items-center p-8">
                <p className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 className="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p className="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p className="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div className="flex flex-col items-center p-8">
                <p className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 className="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p className="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p className="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div className="flex flex-col items-center p-8">
                <p className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 className="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p className="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p className="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div className="flex flex-col items-center p-8">
                <p className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 className="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p className="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p className="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div className="flex flex-col items-center p-8">
                <p className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 className="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p className="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p className="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div className="flex flex-col items-center p-8">
                <p className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 className="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p className="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p className="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div className="flex flex-col items-center p-8">
                <p className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 className="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p className="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p className="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div className="flex flex-col items-center p-8">
                <p className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 className="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p className="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p className="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname } replace to="/login" />;
  }
};

export default PrivateRoute;
