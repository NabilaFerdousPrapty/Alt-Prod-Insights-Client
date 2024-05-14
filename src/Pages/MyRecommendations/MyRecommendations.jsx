import React, { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth/UseAuth";

const MyRecommendations = () => {
  const { user } = UseAuth();
  const [myRecommendations, setMyRecommendations] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/recommendations/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyRecommendations(data);
      });
  }, []);
  return (
    <div className="my-8">
      <div className="my-6">
        <h1 className="text-2xl font-bold text-center my-4 py-2">
          My Recommendations
        </h1>
        <p className="text-purple-700 text-center">
          Here are the recommendations that are made by you.
        </p>
      </div>
      <div className="overflow-x-auto border border-gray-400 rounded-3xl">
     <div>
     <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Brand Name</th>
              <th>Recommended for</th>
              <th>View</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myRecommendations.map((recommendation) => {
              return (
                <tr key={recommendation._id}>
                  <td>
                    <label>
                      <img
                        src={recommendation.productImageUrl}
                        alt=""
                        className="w-32"
                      />
                    </label>
                  </td>
                  <td>{recommendation.QueryTitle}</td>
                  <td>{recommendation.productName}</td>
                  <td>{recommendation.userName}</td>
                  <td>
                    <button className="btn">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
        </table>
     </div>
      </div>
    </div>
  );
};

export default MyRecommendations;
