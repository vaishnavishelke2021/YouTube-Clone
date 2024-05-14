import React from "react";
import { home, subscriptions, shorts } from "../images/icons";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
  // Early return pattern 
  if (!isMenuOpen) return null;

  return (
    <div className="w-52">
      <ul className="px-4 py-4 space-y-1">
        <li className="flex space-x-4 align-middle font-semibold  bg-[#f2f2f2] p-2 rounded-md">
          <span>{home}</span>
          <span>Home</span>
        </li>
        <li className="flex space-x-4 align-middle bg-[#ffffff] p-2">
          <span>{shorts}</span>
          <span>Shorts</span>
        </li>
        <li className="flex space-x-4 align-middle bg-[#ffffff] p-2">
          <span>{subscriptions}</span>
          <span>Subscriptions</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
