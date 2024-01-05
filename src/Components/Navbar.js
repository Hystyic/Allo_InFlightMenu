import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div className="flex items-center w-full px-20 py-4 z-20 sticky backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-blue-200">
      <div className="flex-1"></div>

      <div className="flex-1 text-center text-xl font-semibold">
        IN-FLIGHT MENU
      </div>

      <div className="flex-1 flex justify-end">
        {isAuthenticated ? ( 
          <button
            className="font-medium rounded-lg text-xs sm:text-sm px-4 py-1 md:py-2 text-center text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => logout({ returnTo: window.location.origin })} 
          >
            Log Out
          </button>
        ) : (
          null 
        )}
      </div>
    </div>
  );
};

export default Navbar;