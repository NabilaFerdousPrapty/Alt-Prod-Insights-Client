
import Swal from "sweetalert2";
import logo from "../../assets/AltProdInsightsLogo.png";
import UseAuth from "../../hooks/UseAuth/UseAuth";

const AddQueries = () => {
    const { user } = UseAuth();
 const handleSubmit = (e) => {
    e.preventDefault();
    const form=e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productImageUrl = form.productImageUrl.value;
    const queryTitle = form.queryTitle.value;
    const buyingReasonDetails = form.buyingReasonDetails.value;
    console.log(productName, productBrand, productImageUrl, queryTitle, buyingReasonDetails);
    const email=user.email;
    const name=user.displayName;
    const photo=user.photoURL;
    let  recommendationCount=0;
    const Timestamp = Date.now(); // Get current timestamp in milliseconds
const DateStamp = new Date(Timestamp); // Convert timestamp to Date object
console.log(DateStamp);
// Extract date components
const year = DateStamp.getFullYear();
const month = DateStamp.getMonth() + 1; // Month is zero-based, so we add 1
const day = DateStamp.getDate();

// Extract time components
const hours = DateStamp.getHours();
const minutes = DateStamp.getMinutes();
const seconds = DateStamp.getSeconds();

// Format date and time strings
const dateString = `${year}-${month}-${day}`;
const timeString = `${hours}:${minutes}:${seconds}`;

const currentDate = dateString;
const currentTime = timeString;
console.log("Date:", dateString);
console.log("Time:", timeString);


    const newQuery = {
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
        currentTime
    };
    console.log(newQuery);
    fetch('http://localhost:5000/queries',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newQuery)

    }).then(response => response.json()).then(data => {
        console.log(data);
        Swal.fire({
            icon: 'success',
            title: 'Query Added Successfully',

            showConfirmButton: false,
            timer: 1500
        
        })
        form.reset();
    }).catch(error => {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Failed to Add Query',
            showConfirmButton: false,
            timer: 1500
        })
        form.reset();
    })

 }
  return (
    <div className="lg:px-2 xl:px-0 py-8 rounded-2xl bg-slate-100 ">
      <div className="flex justify-center rounded-2xl">
        <div className="hidden bg-center bg-cover lg:block lg:w-[40%] rounded-2xl" style={{backgroundImage: "url(https://i.ibb.co/0D3dT4J/2887095.jpg)"}}>
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl text-center">
                AltProdInsights :A place to get the best product alternatives
              </h2>
              <p className="max-w-xl mt-3 text-gray-300 text-center">
                AltProdInsights is a platform that provides you with the best product alternatives. You can compare the products and get the best one for you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-xl px-2 mx-auto lg:w-4/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img className="w-auto h-24 sm:h-16" src={logo} alt="" />
              </div>
              <p className="mt-3 ">
                <h2 className="text-2xl font-bold">Welcome to add your queries to AltProdInsights</h2>
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="productName" className="block mb-2 text-sm t">Product Name</label>
                  <input type="text" name="productName" id="productName"  placeholder="Product Name" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="mt-2">
                  <label htmlFor="productBrand" className="block mb-2 text-sm t">Product Brand</label>
                  <input type="text" name="productBrand" id="productBrand"  placeholder="Product Brand" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-2">
                  <label htmlFor="productImageUrl" className="block mb-2 text-sm t">Product Image URL</label>
                  <input type="text" name="productImageUrl" id="productImageUrl" placeholder="Product Image URL" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

              </div>
                <div className="mt-2">
                  <label htmlFor="queryTitle" className="block mb-2 text-sm t">Query Title</label>
                  <input type="text" name="queryTitle" id="queryTitle"  placeholder="Query Title" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-2">
                  <label htmlFor="buyingReasonDetails" className="block mb-2 text-sm t">Buying Reason Details</label>
                  <textarea name="buyingReasonDetails" id="buyingReasonDetails"  placeholder="Buying Reason Details" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-2">
                  <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Add Query
                  </button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQueries;
