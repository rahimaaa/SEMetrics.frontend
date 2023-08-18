import React from "react";
import NavBar from "../components/NavBar";

function Homepage() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-grow bg-white">
        {/* Content of the page */}
        <input className=" " text=" link to the repo"></input>
      </div>

      <footer className="bg-blue-900 sticky dark:bg-gray-900">
        <div className="container px-6  mx-auto">
          <hr className="border-gray-300 dark:border-gray-700" />
          <div className="text-center">
            <p className="text-sm text-gray-300">
              © Copyright 2025. Were in the future catch up. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
