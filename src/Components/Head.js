import React from "react";
import logo from "../images/logo.jpg";
import mic from "../images/mic.png";
import hamMenu from "../images/hamMenu.png";
import { headvideo, notification, search, user } from "../images/icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col px-6 py-6">
      <div className="col-span-1  flex align-middle space-x-8">
        <img
          className="h-4 mt-[1.5px] cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src={hamMenu}
          alt=""
        />
        <img className="h-11 scale-150 -mt-3" src={logo} alt="" />
      </div>

      <div className="col-span-9 flex justify-center">
        <input
          placeholder="Search"
          type="text"
          className="w-[40%] border border-gray-300 py-1 px-4 rounded-l-full"
        />
        <button className="bg-gray-100 border border-gray-300 rounded-r-full py-2 px-5">
          {search}
        </button>
        <button>
          <img className="h-8 ml-4" src={mic} alt="" />
        </button>
      </div>

      <div className="col-span-1 text-end mt-2 align-middle items-center space-x-7 mr-2">
        <button className="">{headvideo}</button>
        <button>{notification}</button>
        <button>{user}</button>
      </div>
    </div>
  );
};

export default Head;
