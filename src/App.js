import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, First, Second, Third, Fourth } from './pages';
import Login from "./components/LogIn"; 

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
      <Route path="/pg2" element={<Second />} />
      <Route path="/pg3" element={<Third />} />
      <Route path="/pg4" element={<Fourth />} />
      </Routes>
      </Router>
  );
}

export default App;
