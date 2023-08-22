import React from 'react'
import right_arrow from "../images/right_arrow.png";
export default function FeatureComponent({logo, title, description1, description2}) {
  return (
    <div className="bg-white w-1/4 rounded-lg pb-5">
        <img className="m-5" src={logo} height="65px" width="65px"></img>
        <div className="ml-11">
            <p className="text-xl font-bold">{title}</p>
            <p className="text-xl">{description1}</p>
            <p className="text-xl">{description2}</p>
        </div>
        <div className="ml-11 mt-5">
            <button className="flex space-x-2">
                <span className="text-xl">Learn More</span>
                <img src={right_arrow} height="30px" width="30px"></img>
            </button>
        </div>
  </div>
  )
}
