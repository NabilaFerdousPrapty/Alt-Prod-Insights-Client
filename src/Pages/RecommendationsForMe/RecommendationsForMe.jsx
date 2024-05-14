import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import { Link } from "react-router-dom";


const RecommendationsForMe = () => {
  const { user } = UseAuth();
    const [recommendationForMe, setRecommendationsForMe] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/ForMeRecommendations/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
       console.log(data);
       setRecommendationsForMe(data);
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
        <th>Company</th>
        <th>View</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        recommendationForMe.map((meRecommendation) => {
          return (
            <tr key={meRecommendation._id}>
              <td>
                <label>
                  <img src={meRecommendation.productImageUrl} alt="" className='w-32' />
                </label>
              </td>
              <td>{meRecommendation.QueryTitle}</td>
              <td>{meRecommendation.productName}</td>
              <td>Posted By:{meRecommendation.RecommenderEmail}</td>
              <td>
              
                <Link to={`/meRecommendations/${meRecommendation._id}`} className="btn">View</Link>
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

export default RecommendationsForMe;