import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import semlogo from "../assets/semlogo.png";
import { Link } from "react-router-dom";



function SideBar() {
  const navigate = useNavigate();
  const { repoName } = useParams();
  
  return (
    <div className=" bg-slate-800">
       <div className=" h-screen p-8">
      
       <h1 className="text-cyan-500 text-lg font-bold">{repoName}</h1>
        <div className = " mt-6">
            <h1 className="text-cyan-500">
            Development Time:
            </h1> 
        <p className= " p-2 text-cyan-100">display the time man</p>
        </div>
        <div className = " mt-6">
        <h1 className="text-cyan-500 ">
            Developers
        </h1>
        <div  className= "p-2 text-cyan-100">
        <p>Contributor 1</p>
        <p>Commits: 0</p>
        <p>Contributor 2</p>
        
        <p>Commits: 1000000000</p>
        <p>Contributor 2</p>
        <p>Commits: 1</p>
        <botton className = "text-cyan-700">ShowMore...</botton>
        </div>

        <div className = " mt-6">
            <h1 className="text-cyan-500">Metrics Color Legend</h1>
            <div className="mt-4 space-y-2 text-cyan-100">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
            <p className="text-sm ml-2">Excellent</p>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 bg-sky-500 rounded-full"></div>
            <p className="text-sm ml-2">Good</p>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 bg-emerald-700 rounded-full"></div>
            <p className="text-sm ml-2">Medium Risk </p>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 bg-sky-800 rounded-full"></div>
            <p className="text-sm ml-2">High Risk</p>
          </div>
        </div>
        </div>
      
        </div>
       
        <Link to={`/dashboard`}>
              <button
                type="button"
                className="inline-block p-6 mt-6 text-bold text-cyan-500 "
              >
                Go Back
              </button>
            </Link>
       </div>

    </div>
  );
}
export default SideBar;
