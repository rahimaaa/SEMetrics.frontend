import React from "react";
import semlogo from "../img/semlogo.png"

const NavBar = () => {
   

  const handleLogin = () => {
  
  };
  const handleLogo = () => {};

  return (
    <nav>
      {/* Logo on the left */}
      <div>
        <img src = {semlogo} alt="logo" />
      </div>

      {/* Navigation links and buttons on the right */}
      <div>
        
        <button onClick={handleLogin}>Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
