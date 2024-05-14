import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth/UseAuth';

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
       <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Product Name</th>
        <th>Brand Name</th>
        <th>View</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        myRecommendations.map((recommendation) => {
          return (
            <tr key={recommendation._id}>
              <td>
                <label>
                  <img src={recommendation.productImageUrl} alt="" className='w-32' />
                </label>
              </td>
              <td>{recommendation.QueryTitle}</td>
              <td>{recommendation.productName}</td>
              <td>For:{recommendation.userName}</td>
              <td>
              
                <button className="btn">Delete</button>
              </td>
            </tr>
          );
        })  
      }
     
   
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
       </div>
    );
};

export default MyRecommendations;