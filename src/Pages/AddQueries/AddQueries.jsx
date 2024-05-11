import React, { useState } from "react";
import logo from "../../assets/AltProdInsightsLogo.png";

const AddQueries = () => {
  

 
  return (
    <div className="lg:px-2 xl:px-0 py-8 rounded-2xl bg-slate-100 ">
      <div className="flex justify-center rounded-2xl">
        <div className="hidden bg-cover lg:block lg:w-[40%] rounded-2xl" style={{backgroundImage: "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"}}>
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Meraki UI</h2>
              <p className="max-w-xl mt-3 text-gray-300">Add Queries to your account and start comparing products.</p>
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
              <form >
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
