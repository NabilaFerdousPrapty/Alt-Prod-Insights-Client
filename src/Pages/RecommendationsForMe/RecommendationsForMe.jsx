import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import { Link } from "react-router-dom";

const RecommendationsForMe = () => {
  const { user } = UseAuth();
  const [recommendationForMe, setRecommendationsForMe] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/ForMeRecommendations/${user?.email}`,{credentials:'include'})
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRecommendationsForMe(data);
      });
  }, []);
  return (
    <div className="my-8">
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold text-center my-4 py-2">Recommendations For Me</h1>
        <p className="text-purple-700">
          Here are the recommendations that are made for you by other users.
        </p>
      </div>
      <div>
    {
      recommendationForMe.length > 0 ?   <div className="overflow-x-auto border border-gray-400 rounded-3xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Company</th>
            <th>User Email</th>
            <th>View</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {recommendationForMe.map((meRecommendation) => {
            return (
              <tr key={meRecommendation._id}>
                <td>
                  <label>
                    <img
                      src={meRecommendation.productImageUrl}
                      alt=""
                      className="w-32"
                    />
                  </label>
                </td>
                <td>{meRecommendation.QueryTitle}</td>
                <td>{meRecommendation.productName}</td>
                <td>Posted By:{meRecommendation.RecommenderEmail}</td>
                <td>
                  <Link
                    to={`/meRecommendations/${meRecommendation._id}`}
                    className="btn"
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* foot */}
      </table>
    </div> : <div className="text-center my-8">
    <h1 className="text-2xl font-bold text-center my-4 py-2">No Recommendations</h1>
    <p className="text-purple-700">
      Sorry, there are no recommendations for you.
      add some boycotted product so that other's can recommend you their 
      alternatives.
    </p>
    <button className=" my-6">
      <Link to="/addQueries" className="btn bg-purple-500 ">Add Product</Link>
    </button>
  </div>
    }
      </div>
    </div>
  );
};

export default RecommendationsForMe;
