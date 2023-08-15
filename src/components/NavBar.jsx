import React, { useEffect, useState } from "react";
import semlogo from "../img/semlogo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // useEffect(()=>{
  //   const fecthcUser = async ()=> {
  //     const response = await axios.get("http://localhost:8080/account/", {withCredentials: true});
  //     if(response.status === 200){
  //       setUser(response.data);
  //     }
  //     console.log("response:\n", response)
  //   }
  //   fecthcUser()
  // },[])
  const handleLogin = async () => {
    try {
      window.open("http://localhost:8080/auth/github", "_self");
    } catch (error) {
      console.error("Error during GitHub login:", error);
    }
  };

  const handleLogout = async () => {
    const response = await axios.get("http://localhost:8080/auth/logout", {
      withCredentials: true,
    });
    if (response.status === 200) {
      setUser(null);
      navigate("/");
    }
    console.log(response);
  };

  const handleLogo = () => {
    navigate("/");
  };
  return (
    <nav className="bg-gray-900 fixed flex top-0 left-0 w-full p-4">
      {/* Logo on the left */}
      <div className="text-xl font-bold">
        <img
          onClick={handleLogo}
          src={semlogo}
          alt="logo"
          className="h-15 hover:scale-110 w-20 cursor-pointer"
        />
      </div>

      {/* Navigation links and buttons on the right */}
      <div className="flex right-0 ml-auto items-center space-x-4">
        {user ? (
          <button
            onClick={handleLogout}
            className=" hover:scale-110 bg-red-500 rounded-full px-3 py-1 right-0 text-sm font-semibold text-white mr-1"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-gray-200 hover:scale-110 dark:bg-gray-700 rounded-full px-3 py-1 right-0 text-sm font-semibold text-white mr-1"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
