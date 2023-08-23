import React from "react";
import SideNavBar from "../components/SideNavBar";
import {
  FaGithub,
  FaUsers,
  FaCode,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Profile({ user }) {
  return (
    <div className="flex bg-gray-100">
      <SideNavBar />
      <div className="flex-grow flex items-center justify-center">
        {user ? (
          <div className="bg-white shadow-lg rounded-lg p-12 text-center w-96">
            <div className="flex flex-col items-center space-y-6">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="rounded-full w-32 h-32 border-4 border-white shadow-md"
              />
              <a
                href={`https://github.com/${user.login}`}
                target="_blank"
                className="text-blue-600 hover:underline text-3xl font-semibold"
              >
                {user.name}'s GitHub Profile
              </a>
              <h3 className="text-xl text-gray-600">@{user.login}</h3>
              <p className="text-gray-800 text-lg">Bio: {user.bio}</p>
              <div className="text-gray-600 mt-6">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <FaGithub className="text-xl" />
                    <p className="text-sm">{user.followers}</p>
                    <p className="text-sm">followers</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUsers className="text-xl" />
                    <p className="text-sm">{user.following}</p>
                    <p className="text-sm">followers</p>
                  </div>
                </div>
              </div>
              <div className="text-gray-600 mt-4">
                <div className="flex items-center space-x-2">
                  <FaCode className="text-xl" />
                  <p className="text-sm">{user.public_repos}</p>
                  <p className="text-sm">repositories</p>
                </div>
              </div>
              <div className="text-gray-600 mt-4">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="ml-4 mr-2" />
                  <p className="text-sm">{user.location}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2 className="text-2xl font-semibold flex-grow flex items-center justify-center">
            No User Yet!
          </h2>
        )}
      </div>
    </div>
  );
}

export default Profile;
