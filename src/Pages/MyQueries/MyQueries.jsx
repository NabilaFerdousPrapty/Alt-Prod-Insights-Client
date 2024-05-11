import { Link } from "react-router-dom";


const MyQueries = () => {
    return (
        <div>
           <Link to={'/addQueries'}>
           <div className="btn">
            Add Queries
           </div>
           </Link>
        </div>
    );
};

export default MyQueries;