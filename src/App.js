import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage} from "./pages";
import NavBar from "./components/NavBar";
import BackendTesting from "./components/BackendTesting";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/backend-testing" element={<BackendTesting />} />
      </Routes>
    </Router>
  );
}

export default App;
