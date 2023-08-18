import React from "react";
import SideNavBar from "../components/SideNavBar";
import { useState } from "react";
import axios from "axios";
function Dashboard() {
  const [repos, setRepos] = useState(null);
  const getRepos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/account/repos/", {
        withCredentials: true,
      });
      console.log("response\n", response.data);
      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex">
      <SideNavBar />
      <div>Dashboard</div>
      <button onClick={getRepos}>Get Repos</button>
    </div>
  );
}

export default Dashboard;
