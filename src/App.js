import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, ColabMetrics, CodingMetrics } from "./pages";
import BackendTesting from "./components/BackendTesting";
import RepoMetrics from "./pages/RepoMetrics";
import axios from "axios";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import Dashboard from "./pages/DashBoard";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8080/account/", {
          withCredentials: true,
        });
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/colab-metrics/:repoName" element={<ColabMetrics />} />
        <Route path="/coding-metrics/:repoName" element={<CodingMetrics />} />
        <Route path="/repos/:repoName" element={<RepoMetrics />} />
        <Route path="/backend-testing" element={<BackendTesting />} />
      </Routes>
    </Router>
  );
}

export default App;
