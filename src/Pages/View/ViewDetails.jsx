import React, { useState } from 'react';
import useThemeToggle from '../../hooks/UseThemeToogle/UseThemeTooogle';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () =>{ const { theme } = useThemeToggle();
let bgColor, textColor;
const query = useLoaderData() || {};
console.log();
const {
    QueryTitle,
productName ,
userEmail,
userName,
RecommenderEmail,
RecommenderName,
CurrentTime_Stamp,
productImageUrl,
reason,
}= query;

if (theme === "sunset") {
  bgColor = "bg-purple-200";
  textColor = "text-purple-700";
} else {
  bgColor = "bg-slate-200";
  textColor = "text-black";
}

console.log(query);

return (
 <div>
   <div className={`my-3 ${bgColor}  ${textColor} rounded-2xl`}>
    <section className="p-6 ">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full px-6 py-10 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50">
        
          <h1 className="text-5xl font-extrabold text-gray-900">
            {QueryTitle}
          </h1>
          <p>
            <span className="font-medium text-gray-900 text-xl">
                Product Name:
            </span>
            {productName}
          </p>
          <p>
            <span className="font-medium text-gray-900 text-xl">
              Posted By:  User Email:
            </span>
            {userEmail}
          </p>
            <p>
            <span className="font-medium text-gray-900 text-xl">
             Posted By   User Name:
            </span>
            {userName}
            </p>

            <div>
            <p>
                <span className="font-medium text-gray-900 text-xl">
                    Recommender Email:
                </span>
                {RecommenderEmail}
            </p>
            <p>
                <span className="font-medium text-gray-900 text-xl">
                    Recommender Name:
                </span>
                {RecommenderName}
            </p>
            </div>
          <p className="text-justify my-2">
            <span className="font-medium text-gray-900 text-xl  text-wrap">
              Alternation Reason:
            </span>
            {reason}
          </p>
          <div>
            <div className="flex items-center justify-center space-x-4 bg-purple-200 rounded-lg py-5">
              <img
                src={productImageUrl}
                alt
                className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
              />
              <div>
                
                <p>
                  on {CurrentTime_Stamp}
                </p>
              </div>
            </div>
           
          </div>
          <div>
           
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
  
 </div>
);
};

export default ViewDetails;