import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
//idk someone else do this
function LogIn(){

    const handleLogin = async () => {
       console.log("hi")
      };

    return(
        <div>
        <h1>Log In</h1>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login with GitHub
        </Button>
        </div>
    );
}
export default LogIn;