import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SideNavBar from "../components/SideNavBar";

function Profile({ user }) {
  return (
    <div className="flex">
      <SideNavBar />
      <div>
        {user ? (
          <>
            <a href={`https://github.com/${user.login}`} target="_blank">
              <h2>Full Name: {user.name}</h2>
              <h3>Username: {user.login}</h3>
            </a>
            <h4>Bio: {user.bio} </h4>
            <br />
            <img
              src={user.avatar_url}
              alt={user.login}
              width="64px"
              height="64px"
            />
          </>
        ) : (
          <h2>No User Yet!</h2>
        )}
      </div>
    </div>
  );
}

export default Profile;
