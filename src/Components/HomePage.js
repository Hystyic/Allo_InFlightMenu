import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HomePage = () => {
  const { loginWithRedirect } = useAuth0(); 

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col justify-center items-center p-4 space-y-4">
     
        <div className="text-5xl mb-4"> 
          IN-FLIGHT MENU
        </div>
        <button
          onClick={() => loginWithRedirect({ appState: { targetUrl: "meals" } })} 
          className="flex items-center font-medium rounded-lg text-2xl px-8 py-4 bg-green-500 hover:bg-green-600 text-white"
        >
          Login
        </button>
        {/* Order Button */}
        <Link to="/meals"> 
          <button
            className="flex items-center font-medium rounded-lg text-2xl px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white"
          >
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
