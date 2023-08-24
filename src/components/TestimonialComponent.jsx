import React from 'react'
import quotes from "../images/quotes.png";
export default function TestimonialComponent({review, name, role, photo}) {
  return (
    <div className="bg-white w-1/2  rounded-lg pb-5">
        <div className="ml-5 pt-5">
            <img className="mt-1" src={quotes} height="50px" width="50px"></img>
            <p className="pt-5 pr-5 overflow-auto">{review}</p>
            <div className="flex space-x-5 pt-5">
            <img src={photo} height="50px" width="50px"></img>
            <div>
                <p className="text-[#00BB78] font-bold">{name}</p>
                <p>{role}</p>
            </div>
            </div>
        </div>
    </div>
  )
}
