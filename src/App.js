import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, First } from "./pages";
import Login from "./components/LogIn";
import BackendTesting from "./components/BackendTesting";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/login"
          element={<Login name="login" displayName="Log In" />}
        />
        <Route path="/pg1" element={<First />} />
        <Route path="/backend-testing" element={<BackendTesting />} />
      </Routes>
    </Router>
  );
}

export default App;
