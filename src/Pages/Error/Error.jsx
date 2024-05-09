import React from 'react';
import img from '../../assets/Oops! 404 Error with a broken robot.gif'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<img src={img} alt="" className='rounded-full' />
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link to={'/'} className="px-8 py-3 font-semibold rounded-3xl bg-purple-400 text-gray-50">Go Back</Link>
		</div>
	</div>
</section>
        </div>
    );
};

export default Error;