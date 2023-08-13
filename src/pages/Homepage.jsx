import React from "react";
import semlogo from "../img/semlogo.png";
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
      <footer className="bg-blue-900 sticky dark:bg-gray-900">
<div class="container px-6 py-8 mx-auto">
  <div class="flex flex-col items-center text-center">
    <a href="#">
      <img class="w-auto h-7" src={semlogo} alt="" />
    </a>

    <p class="max-w-md mx-auto mt-4 text-gray-300 dark:text-gray-400">
     Measure the ----- of your repository
    </p>
  </div>

  <hr class="my-10 border-gray-300 dark:border-gray-700" />

  <div class="flex flex-col items-center sm:flex-row sm:justify-between">
    <p class="text-sm text-gray-300">
      © Copyright 2025. Were in the future catch up. All Rights
      Reserved.
    </p>

    <div class="flex mt-3 -mx-2 sm:mt-0">
      <a
        href="#"
        class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
        aria-label="Reddit"
      >
        {" "}
        Teams{" "}
      </a>

      <a
        href="#"
        class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
        aria-label="Reddit"
      >
        {" "}
        Privacy{" "}
      </a>

      <a
        href="#"
        class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
        aria-label="Reddit"
      >
        {" "}
        Cookies{" "}
      </a>
    </div>
  </div>
</div>
</footer>
      </footer>
    </div>
  );
}

export default Homepage;





