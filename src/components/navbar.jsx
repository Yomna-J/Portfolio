import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    // CODE BELOW: https://larainfo.com/blogs/react-responsive-navbar-menu-with-tailwind-css-example
    <nav className="w-full text-secondary">
      <div className="mx-auto justify-between px-4 md:flex md:items-center lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <a href="#">
              <h2 className="font-impact text-3xl">
                <span className="text-primary">&lt;Y</span>oumna
                <span className="text-primary">/&gt; </span>
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="text-gray-700 focus:border-gray-400 rounded-md p-2 outline-none focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">About Me</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Skills</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Projects</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
