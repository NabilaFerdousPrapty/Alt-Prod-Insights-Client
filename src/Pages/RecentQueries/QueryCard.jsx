import React from "react";

const QueryCard = ({ query }) => {
  const {
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
    currentTime,
  } = query;
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg   lg:h-[700px] md:h-[760px] border-2 border-gray-400 shadow-2xl">
        <div className="flex space-x-4">
          <img
            alt=""
            src={photo}
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {name}
            </a>
            <span className="text-xs text-gray-600">
              Posted on {currentDate} at {currentTime}
            </span>
          </div>
        </div>
        <div>
          <img
            src={productImageUrl}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500"
          />
         <div className="flex justify-between items-center font-extrabold my-6">
         <p><span className="text-purple-500">Name: </span>{productName}</p>
          <p><span className="text-purple-500 ">Brand: </span>{productBrand}</p>
         </div>
          <h2 className="mb-1 text-xl font-semibold">{queryTitle}</h2>
          <p className="text-sm text-gray-600">
            {buyingReasonDetails.slice(0, 100)}.....
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default QueryCard;
