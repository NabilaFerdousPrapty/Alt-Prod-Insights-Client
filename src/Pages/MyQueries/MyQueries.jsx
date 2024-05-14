import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import Mycard from "./Mycard";

const MyQueries = () => {
  const { user } = UseAuth();
  // console.log(user?.email);
  const [myQueries, setMyQueries] = useState([]);
  const fetching=()=>{
    fetch(`${import.meta.env.VITE_API_URL}/queriess/${user?.email}`,{credentials:'include'})
      .then((res) => res.json())
      .then((data) => {
        const sortedQueries = data.sort((a, b) => {
          const dateA = new Date(`${a.currentDate} ${a.currentTime}`);
          const dateB = new Date(`${b.currentDate} ${b.currentTime}`);
          return dateB - dateA;
        });
        setMyQueries(sortedQueries);
      });
  }
  useEffect(() => {
    fetching()
  }, []);
  return (
    <div>
      <div>
        <section className="p-6 border-2 border-gray-400 rounded-md my-5">
          <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
              <span className="block mb-2 text-indigo-600">
                AltProdInsights
              </span>
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold ">
                Discover Insights with AltProdInsights
              </h1>
              <p className="my-8">
                <span className="font-medium ">
                  Empowering decisions with data.
                </span>{" "}
                Explore alternative products, compare prices, and make informed
                choices effortlessly.
              </p>
              <form noValidate="" action="" className="self-stretch space-y-3">
                <div>
                  <label htmlFor="name" className="text-sm sr-only">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md focus:ring focus:ring-indigo-600 border-gray-300 lg:h-10"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Email address"
                    className="w-full rounded-md focus:ring focus:ring-indigo-600 border-gray-300 lg:h-10"
                  />
                </div>
                <button
                  type="button"
                  className="md:w-full py-2 font-semibold rounded bg-indigo-600 text-gray-50"
                >
                  Join the waitlist
                </button>
              </form>
            </div>
            <img
              src="https://i.ibb.co/Yjtw5g4/9693965.jpg"
              alt=""
              className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500"
            />
          </div>
        </section>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-5">
        {myQueries.map((anyQueries) => (
          <Mycard fetching={fetching} key={anyQueries._id} anyQueries={anyQueries}></Mycard>
        ))}
      </div>

      <section className=" rounded-lg border border-gray-600">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight xl:text-3xl ">
            {" Discover Insights with AltProdInsights "}
            <p className="text-blue-500">
              Empowering decisions with data
            </p>
          </h2>

          <p className="max-w-4xl mt-6 text-center ">
            Explore alternative products, compare prices, and make informed
            choices effortlessly.So What are you waiting for add your queries now
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Link to={"/addQueries"}>
              <div className="btn">Add Queries</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyQueries;
