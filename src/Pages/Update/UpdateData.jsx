import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateData = () => {
    const initialData = useLoaderData();
    const [_id] = useState(initialData._id);
    const [formData, setFormData] = useState(initialData);
    // console.log(data);
    const handleUpdate=async(e,)=>{
        e.preventDefault();
        const form=e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productImageUrl = form.productImageUrl.value;
        const queryTitle = form.queryTitle.value;
        const buyingReasonDetails = form.buyingReasonDetails.value;
        // console.log(productName, productBrand, productImageUrl, queryTitle, buyingReasonDetails);
        const updatedData={
            productName,
            productBrand,
            productImageUrl,
            queryTitle,
            buyingReasonDetails
        }
        fetch(`${import.meta.env.VITE_API_URL}/myQueries/update/${_id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        }) 
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data. modifiedCount>0) {
            Swal.fire({
              title: "Congratulations!",
              text: "Your tourist spot has been Updated successfully!",
              icon: "success",
              confirmButtonText: "Cool",
            });
            setFormData(updatedData);
            form.reset();
          } else {
            Swal.fire({
              title: "OOPS!",
              text: "Your tourist spot has not been updated",
              icon: "Error",
              confirmButtonText: "Cool",
            });
            form.reset();
          }
        });
        
        
        
    }
    return (
        <div>
               <div className="mt-8 mx-1">
              <form  onSubmit={handleUpdate}>
                <div>
                  <label htmlFor="productName" className="block mb-2 text-sm t">Product Name</label>
                  <input type="text" name="productName" id="productName"  placeholder="Product Name" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" defaultValue={formData.productName} required/>
                </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="mt-2">
                  <label htmlFor="productBrand" className="block mb-2 text-sm t">Product Brand</label>
                  <input type="text" name="productBrand" id="productBrand"  placeholder="Product Brand" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" defaultValue={formData.productBrand} required />
                </div>

                <div className="mt-2">
                  <label htmlFor="productImageUrl" className="block mb-2 text-sm t">Product Image URL</label>
                  <input type="text" name="productImageUrl" id="productImageUrl" placeholder="Product Image URL" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" defaultValue={formData.productImageUrl} required/>
                </div>

              </div>
                <div className="mt-2">
                  <label htmlFor="queryTitle" className="block mb-2 text-sm t">Query Title</label>
                  <input type="text" name="queryTitle" id="queryTitle"  placeholder="Query Title" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" defaultValue={formData.queryTitle} required />
                </div>

                <div className="mt-2">
                  <label htmlFor="buyingReasonDetails" className="block mb-2 text-sm t">Boycotting Reason Details</label>
                  <textarea name="buyingReasonDetails" id="buyingReasonDetails"  placeholder="Boycotting Reason Details" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" defaultValue={formData.buyingReasonDetails} required/>
                </div>

                <div className="mt-2">
                  <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Update Data
                  </button>
                </div>
              </form>
              
            </div>
        </div>
    );
};

export default UpdateData;