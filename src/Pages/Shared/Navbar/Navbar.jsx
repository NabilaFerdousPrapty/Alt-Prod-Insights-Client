import  { useEffect, useState } from "react";
import logo from '../../../assets/AltProdInsightsLogo.png'
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [theme, setTheme] = useState(() => {
    // Load theme from local storage or set default theme
    return localStorage.getItem("theme") || "sunset";
  });

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("autumn");

    } else {
      setTheme("sunset");
    }
  };
  useEffect(()=>{
    localStorage.setItem("theme",theme);
    const currentTheme =localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme",currentTheme);
  
  },[theme])

  return (
    <div>
     <nav className={`relative ${theme === "sunset" ? "bg-white text-purple-700" : "bg-purple-200 text-blue-600"}  mt-3 mx-1 shadow  lg:rounded-full rounded-xl`}>

        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link to={'/'} >
               <img src={logo} alt="" className="w-1/5" />
              </Link>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className=" focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } lg:flex lg:items-center lg:mx-8`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:mx-8">
                <NavLink
                  to={'/'}
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 "
                >
                  Home
                </NavLink>
                <NavLink
                  to={'/queries'}
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 "
                >
                  Queries
                </NavLink>
                <a
                  href="#"
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 "
                >
                  Random Item
                </a>
                <a
                  href="#"
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 "
                >
                  Experts
                </a>
              </div>

              <div className="flex items-center mt-4 lg:mt-0 justify-between gap-3">
                <div className="text-xs">
                  <label className="flex cursor-pointer gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input
                    onClick={toggleTheme}
                      type="checkbox"
                      value="autumn"
                      className="toggle theme-controller"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </label>
                </div>

                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>

                  <h3 className="mx-2  lg:hidden">
                    Khatab wedaa
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
