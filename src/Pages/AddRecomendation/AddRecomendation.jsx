import logo from "../../assets/AltProdInsightsLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import Swal from "sweetalert2";

const AddRecomendation = ({ query, updateRecommendationCount }) => {
  const Timestamp = Date.now(); // Get current timestamp in milliseconds
  const DateStamp = new Date(Timestamp);
  // Extract date components
  const year = DateStamp.getFullYear();
  const month = DateStamp.getMonth() + 1; // Month is zero-based, so we add 1
  const day = DateStamp.getDate();

  // Format date and time strings
  const dateString = `${year}-${month}-${day}`;

  const currentDatestring = dateString;
  const { user } = UseAuth();
  const { _id, email, name, productName, productImageUrl, recommendationCount } = query;

  const handleRecomendation = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form[0].value;
    const productName = form[1].value;
    const productImageUrl = form[2].value;
    const reason = form[3].value;
    const recommendation = {
      queryId: _id,
      QueryTitle: title,
      productName: productName,
      userEmail: email,
      userName: name,
      RecommenderEmail: user.email,
      RecommenderName: user.displayName,
      CurrentTime_Stamp: currentDatestring,
      productImageUrl,
      reason,
    };

    if (user.email === email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You cannot recommend your own query",
        confirmButtonText: "OK",
        timer: 1500,
      });
      form.reset();
      return;
    }

    try {
      // Add recommendation to database
      const response = await fetch(`${import.meta.env.VITE_API_URL}/recommendations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recommendation),
      });

      if (response.ok) {
        console.log("Recommendation added successfully");
        // Update query document with incremented recommendationCount using $inc
        const updateResponse = await fetch(`${import.meta.env.VITE_API_URL}/allQueries/${_id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            $inc: { recommendationCount: 1 }
          }),
        });


        if (updateResponse.ok) {
          console.log("Recommendation count updated successfully");
          updateRecommendationCount(recommendationCount + 1);
          Swal.fire({
            icon: "success",
            title: "Recommendation Added Successfully",
            confirmButtonText: "OK",
            timer: 2500,

          })
        } else {
          console.error("Failed to update recommendation count");
          Swal.fire({
            icon: "error",
            title: "Failed to Add Recommendation",
            confirmButtonText: "OK",

          })
        }

        // Reset the form after successful submission
        form.reset();
      } else {
        console.error("Failed to add recommendation");
        Swal.fire({
          icon: "error",
          title: "Failed to Add Recommendation",
          confirmButtonText: "OK",
          timer: 1500,
        })
      }
    } catch (error) {

      console.error("Error occurred:", error);
    }
  };


  return (
    <div>
      <section className="">
        <div className="container px-6 py-24 mx-auto lg:py-32">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img className="w-2/6 mx-auto" src={logo} alt="Logo" />
              <h1 className="mt-4 md:text-lg text-center">Add a New Recommendation</h1>
              <h1 className="mt-4 text-2xl font-medium capitalize lg:text-3xl text-center">
                Fill in the details below to add a new product recommendation.
              </h1>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <form onSubmit={handleRecomendation} className="w-full lg:max-w-xl">
                <div className="relative flex items-center">
                  <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input type="text" className="block w-full py-3 border rounded-lg px-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Recommendation Title" required />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input type="text" className="block w-full px-10 py-3 border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Recommended Product Name" required />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input type="text" className="block w-full px-10 py-3 border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Recommended Product Image URL" required />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <textarea className="block w-full px-10 py-3 border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Reason for Recommendation" required />
                </div>

                <div className="mt-8 md:flex md:items-center">
                  <button className="w-full mx-auto px-6 py-3 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Add Recommendation
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-8 md:mt-24 ">
            <p>Share your recommendation on</p>
            <h3 className="text-blue-500 dark:text-blue-400 sm:w-1/2"> Social networks </h3>
            <div className="flex items-center mt-4 text-4xl justify-between gap-10">
              <FaFacebook />
              <FaSquareTwitter />
              <IoLogoLinkedin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddRecomendation;
