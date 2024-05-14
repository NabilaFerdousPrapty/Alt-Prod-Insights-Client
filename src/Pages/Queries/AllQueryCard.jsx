
import useThemeToggle from "../../hooks/UseThemeToogle/UseThemeTooogle";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
const AllQueryCard = ({ query }) => {
  const { theme } = useThemeToggle();
  const {
    _id,
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
  
  // console.log(_id);
  const buttonBgColor = theme === "sunset" ? "bg-slate-800" : "bg-white";
  const buttonTextColor = theme === "sunset" ? "text-white" : "text-purple-700";
  return (
    <div>
      <div className="flex flex-col max-w-3xl p-6 space-y-6 overflow-hidden rounded-lg   lg:h-[750px] md:h-[800px] border-2 border-gray-400 shadow-2xl">
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
          <h2 className="mb-1 text-xl font-semibold">{queryTitle}</h2>
          <p className="text-sm text-gray-500">
            {buyingReasonDetails.slice(0, 100)}.....
          </p>
        </div>
        <div className="flex  justify-center items-center">
         
          <Link
            to={`/queries/${query._id}`}
           
            className={`p-2 ${buttonBgColor} ${buttonTextColor}   text-sm bg-slate-500 border rounded-lg border-gray-800`}
          >
            View Details
          </Link>
        </div>
        <div>
          <div className={`text-center mx-auto`}>
            <button
             
              className={`btn ${buttonBgColor} ${buttonTextColor}  `}
            >
              Total Recommendations:
              <span>{recommendationCount}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQueryCard;
AllQueryCard.propTypes = {
  query: propTypes.object.isRequired,
};
