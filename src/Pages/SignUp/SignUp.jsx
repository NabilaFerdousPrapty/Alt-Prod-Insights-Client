import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import toast from 'react-hot-toast';

const SignUp = () => {
    const {signUp,createUser,setUser,user,updateUserProfile,}=UseAuth();
    const navigate=useNavigate();
    const handleSignUp= async(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const userName=form.get('userName');
        const photoUrl=form.get('photoUrl');
        const email=form.get('email');
        const phone=form.get('phone');
        const password=form.get('password');
        const confirmPassword=form.get('confirmPassword');
        // const user={userName,photoUrl,email,phone,password,confirmPassword};
        // console.log(user);
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
            
        }
        try{
            const result=await createUser(email,password);
            console.log(result);
            await updateUserProfile(userName,photoUrl);
            setUser({...user,photoUrl:photoUrl,displayName:userName});
            navigate('/');
            toast.success('Account created successfully');
        }catch(error){
            console.log(error);
            toast.error(error.message);
        }

    }
    return (
        <section className="rtl">
            <div className="flex justify-center min-h-screen mt-6 rounded-xl">
                <div className=" hidden bg-cover bg-center lg:block lg:w-3/5 rounded-3xl gap-2" style={{backgroundImage: "url('https://i.ibb.co/6RMfN1Z/Woman-doing-product-video-review.jpg')"}}>
                </div>

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-2xl font-semibold tracking-wider  capitalize ">
                            Get your free account now.
                        </h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                        </p>



                        <form onSubmit={handleSignUp} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm ">User Name</label>
                                <input name='userName' type="text" placeholder="John Doe" className="block w-full px-5 py-3  mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                            </div>

                            <div className=''>
                                <label className="block mb-2 text-sm ">Photo Url</label>
                                <input name='photoUrl' type="url" placeholder="johnsnow@example.jpg" className="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                           

                            <div className=''>
                                <label className="block mb-2 text-sm ">Email address</label>
                                <input name='email' type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm ">Phone number</label>
                                <input name='phone'  type="text" placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm ">Password</label>
                                <input name='password'  type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm ">Confirm password</label>
                                <input name='confirmPassword' type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                            </div>

                            <button
                                className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                <span>Sign Up </span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                       <div className='flex justify-center items-center my-5 gap-3'>
                       <p>Already have an account?</p>
                        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
