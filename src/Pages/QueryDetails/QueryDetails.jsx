import { Link, useLoaderData } from "react-router-dom";
import useThemeToggle from "../../hooks/UseThemeToogle/UseThemeTooogle";
import AddRecomendation from "../AddRecomendation/AddRecomendation";
import { useEffect, useState } from "react";

const QueryDetails = () => {
  const { theme } = useThemeToggle();
  let bgColor, textColor;
  const query = useLoaderData() || {};
  console.log();
  const {
    _id,
    productName,
    productBrand,
    productImageUrl,
    queryTitle,
    buyingReasonDetails,
    email,
    name,
    photo,
    recommendationCount,
    currentDate,
    currentTime,
  } = query;

  if (theme === "sunset") {
    bgColor = "bg-purple-200";
    textColor = "text-purple-700";
  } else {
    bgColor = "bg-slate-200";
    textColor = "text-black";
  }
  const [hidden, setHidden] = useState(true);
  const handleToggle = () => {
    setHidden(!hidden);
  };
  const [recommendationCounting, setRecommendationCounting] = useState(
    query.recommendationCount
  );
  useEffect(() => {
    // Fetch recommendations for the current query
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/recommendations?queryId=${_id}`
        );
        if (response.ok) {
          const data = await response.json();
          setRecommendationCounting(data);
        } else {
          console.error("Failed to fetch recommendations");
        }
      } catch (error) {
        console.error("Error occurred while fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, [_id]);
  const updateRecommendationCount = (count) => {
    setRecommendationCounting(count);
  };
  return (
    <div>
      <div className={`my-3 ${bgColor}  ${textColor} rounded-2xl`}>
        <section className="p-6 ">
          <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full px-6 py-10 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50">
              <span className="block mb-2 text-violet-600">{productName}</span>
              <h1 className="text-5xl font-extrabold text-gray-900">
                {queryTitle}
              </h1>
              <p className="my-8">
                <span className="font-medium text-gray-900 text-xl">
                  Brand:
                </span>
                {productBrand}
              </p>
              <p className="text-justify my-2">
                <span className="font-medium text-gray-900 text-xl  text-wrap">
                  Alternation Reason:
                </span>
                {buyingReasonDetails}
              </p>
              <div>
                <div className="flex items-center justify-center space-x-4 bg-purple-200 rounded-lg py-5">
                  <img
                    src={photo}
                    alt
                    className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
                  />
                  <div>
                    <p className="text-gray-500">
                      Posted by: {name} with {email}{" "}
                    </p>
                    <p>
                      on {currentDate} at {currentTime}
                    </p>
                  </div>
                </div>
                <p className="my-2">
                  <span className="text-gray-800 font-bold ">
                    Total Recommendations:
                  </span>
                  {recommendationCount}
                </p>
              </div>
              <div>
                <button
                  onClick={handleToggle}
                  className="px-4 py-2 text-white bg-blue-500 rounded-md"
                >
                  Recommend
                </button>
                
              </div>
              <div className="btn bg-purple-800 text-white my-3">
                  <Link to={`/allRecommendations/${_id}`}>
                    Show All Recommendations
                  </Link>
                </div>
            </div>
            <img
              src={productImageUrl}
              alt=""
              className="object-cover w-full rounded-md xl:col-span-3 "
            />
          </div>
        </section>
      </div>
      <div>
        {!hidden && (
          <AddRecomendation
            updateRecommendationCount={updateRecommendationCount}
            query={query}
          />
        )}
      </div>
    </div>
  );
};

export default QueryDetails;
