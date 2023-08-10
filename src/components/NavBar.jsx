import React from "react";
import semlogo from "../img/semlogo.png"


const NavBar = () => {
 

  const handleLogin = () => {
  
  };
 

  return (
    <nav className="bg-gray-900 fixed flex top-0 left-0 w-full p-4">
      {/* Logo on the left */}
      <div className="text-xl font-bold">
        <img
          
          src={semlogo}
          alt="logo"
          className="h-15 hover:scale-110 w-20"
        />
      </div>

      {/* Navigation links and buttons on the right */}
      <div className="flex right-0 ml-auto items-center space-x-4">
      
        <button
          onClick={handleLogin}
          className="bg-gray-200 hover:scale-110 dark:bg-gray-700 rounded-full px-3 py-1 right-0 text-sm font-semibold text-white mr-1"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

