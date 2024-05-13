import { useLoaderData } from "react-router-dom";
import AllQueryCard from "./AllQueryCard";


const Queries = () => {
     const queries=useLoaderData();
    return (
       <div>
          <div></div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-5">
           {
                queries.map(query=>(
                     <AllQueryCard key={query._id} query={query}/>
                ))
           } 
        </div>
       </div>
    );
};

export default Queries;