import { useLoaderData } from "react-router-dom";
import AllQueryCard from "./AllQueryCard";
import { useState } from "react";
import useThemeToggle from "../../hooks/UseThemeToogle/UseThemeTooogle";
import logo from "../../assets/AltProdInsightsLogo.png";
const Queries = () => {
  const queries = useLoaderData();
  const { theme } = useThemeToggle();
  const [gridCols, setGridCols] = useState(3);
  let bgColor, textColor;

  const handleLayoutChange = (cols) => {
    // console.log("New grid columns:", cols);
    setGridCols(cols);
  };

  if (theme === "sunset") {
    bgColor = "bg-purple-200";
    textColor = "text-purple-700";
  } else {
    bgColor = "bg-slate-200";
    textColor = "text-black";
  }

  // console.log(gridCols);
  return (
    <div className="my-6 ">
      <header
        className={`mt-4 bg-slate-200 ${bgColor} ${textColor} rounded-2xl my-7`}
      >
        <nav className="border-t-4  border-blue-500">
          <div className="container flex items-center justify-between px-6 py-3 mx-auto">
            <a>
              <img
                className="w-auto h-20 sm:h-14"
                src={logo}
                alt="AltProdInsights Logo"
              />
            </a>

            <a className="my-1 text-sm font-medium  rtl:-scale-x-100  hover:text-blue-500  lg:mx-4 lg:my-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </nav>

        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold  lg:text-4xl">
                  Search for Products on{" "}
                  <span className="text-blue-500">AltProdInsights</span>
                </h1>

                <p className="mt-3 ">
                  Discover alternative products tailored just for you.
                </p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <input
                    name="title"
                    id="title"
                    type="text"
                    className="px-4 py-2  border rounded-md  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Enter product name"
                  />

                  <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full max-w-md rounded-xl"
                src="https://i.ibb.co/wSng1Yk/2392178.jpg"
                alt="email illustration vector art"
              />
            </div>
          </div>
        </div>
      </header>
      <div>
        <h1 className="text-3xl font-semibold text-center my-5">All Queries</h1>
      </div>
      <div className="lg:flex justify-between items-center flex-col md:flex-row mt-5 hidden">
        <button className="btn" onClick={() => handleLayoutChange(1)}>
          1 Column Layout
        </button>
        <button className="btn" onClick={() => handleLayoutChange(2)}>
          2 Column Layout
        </button>
        <button className="btn" onClick={() => handleLayoutChange(3)}>
          3 Column Layout
        </button>
      </div>
      <div className={`grid lg:grid-cols-${gridCols} gap-4 mt-8 mb-5 w-full`}>
        {queries.map((query) => (
          <AllQueryCard key={query._id} query={query} />
        ))}
      </div>
    </div>
  );
};

export default Queries;
