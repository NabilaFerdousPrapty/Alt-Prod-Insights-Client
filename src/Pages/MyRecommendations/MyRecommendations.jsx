import React, { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyRecommendations = () => {
  const { user } = UseAuth();
  const [myRecommendations, setMyRecommendations] = useState([]);
  const fetching=()=>{
    fetch(`${import.meta.env.VITE_API_URL}/recommendations/${user?.email}`,{credentials:'include'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyRecommendations(data);
      });
  }
  useEffect(() => {
    fetching()
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/recommendations/delete/${id}?confirmation=true`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              
             
              Swal.fire(
                'Deleted!',
                'Your recommendation has been deleted.',
                'success'
              )
              
            }
            fetching();
          });
      }
    })
  }
  
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
      {
        myRecommendations.length > 0 ? <div className="overflow-x-auto border border-gray-400 rounded-3xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Company</th>
              <th>User Name</th>
              <th>Delete</th>
             
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myRecommendations.map((myRecommendation) => {
              return (
                <tr key={myRecommendation._id}>
                  <td>
                    <label>
                      <img
                        src={myRecommendation.productImageUrl}
                        alt=""
                        className="w-32"
                      />
                    </label>
                  </td>
                  <td>{myRecommendation.QueryTitle}</td>
                  <td>{myRecommendation.productName}</td>
                  <td>Posted By:{myRecommendation.userName}</td>
                 
                  <td>
                    <button onClick={()=>{handleDelete(myRecommendation._id)}} className="btn">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>:
        </div> : <div className="text-center my-8">
        <h1 className="text-2xl font-bold text-center my-4 py-2">You have not added any recommendation</h1>
        <p className="text-purple-700">
          Add some recommendations to help others.So let's get started and let's not keep us limited to a single product and let's explore the world of products.

        </p>
        <button   className="my-5 btn bg-blue-800 text-white">
          <Link to={'/queries'}>
            Visit Queries
          </Link>
        </button>
      </div>

      }
    </div>
  );
};

export default MyRecommendations;
