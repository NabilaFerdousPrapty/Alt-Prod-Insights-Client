import { set } from 'firebase/database';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mycard = ({ anyQueries }) => {
    const {_id,productName,currentDate,currentTime,productImageUrl,productBrand,queryTitle,buyingReasonDetails}=anyQueries;
    const [deleteing,setDeleteing]=useState(false);
    const handleDelete= async (id)=>{
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
                setDeleteing(true);
                fetch(`${import.meta.env.VITE_API_URL}/myQueries/delete/${id}`,{
                    method:'DELETE'
                }).then(response=>response.json()).then(data=>{
                    console.log(data);
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          
                    }
                    setDeleteing(false);
                }).catch(error=>{
                    console.log(error);
                    setDeleteing(false);
                })
            }
          })
    }

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
                <Link to={`/myQueries/update/${_id}`} className="btn bg-purple-300">Update</Link>
                <button onClick={()=>handleDelete(_id)}  className="btn bg-purple-300">
                    Delete
                </button>
            </div>
           
           
        </div>
    );
};

export default Mycard;
