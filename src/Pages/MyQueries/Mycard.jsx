import React from 'react';
import { Link } from 'react-router-dom';

const Mycard = ({ anyQueries }) => {
    const {_id,productName,currentDate,currentTime,productImageUrl,productBrand,queryTitle,buyingReasonDetails}=anyQueries;
    return (
        <div className="bg-white rounded-md shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{productName}</h2>
                <span className="text-gray-500">Posted on {currentDate} at {currentTime}</span>
            </div>
            <div className="flex items-center mb-4 flex-col justify-between">
                <img src={productImageUrl} alt={productName} className="w-36 h-36 object-cover rounded-md mx-auto " />
                <div className='font-medium my-3 text-center flex flex-col justify-center items-center'>
                    <p className="text-gray-600"><span className='font-bold my-1 text-purple-600'>Product Brand:</span> {productBrand}</p>
                    <p className="text-gray-600"><span className='font-bold  my-1 text-purple-600'>Query Title:</span> {queryTitle}</p>
                    <p className="text-gray-600"><span className='font-bold my-1 text-purple-700 '>Boycotting Reason:</span> {buyingReasonDetails.slice(0,100)}....</p>
                </div>
            </div>
            <div className='w-3/5 mx-auto flex flex-col gap-4 my-4'>
                <Link to={`/myQueries/${_id}`} className="btn bg-purple-300">ViewDetails</Link>
                <div className="btn bg-purple-300">Update</div>
                <div className="btn bg-purple-300">
                    Delete
                </div>
            </div>
           
           
        </div>
    );
};

export default Mycard;
