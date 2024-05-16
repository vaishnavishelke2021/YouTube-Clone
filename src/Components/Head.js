import React, { useEffect, useState } from "react";
import logo from "../images/logo.jpg";
import mic from "../images/mic.png";
import hamMenu from "../images/hamMenu.png";
import { headvideo, notification, search, user } from "../images/icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  console.log(searchQuery);

  useEffect(() => {
    // DEBOUNCING :
    // make an API call after every request
    // but if diff bet 2 API calls is <200ms => DECLINE API call
    // else => MAKE  API CALL
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestion(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col px-6 py-6">
      {/* logo  */}
      <div className="col-span-1  flex align-middle space-x-8">
        <img
          className="h-4 mt-[1.5px] cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src={hamMenu}
          alt=""
        />
        <img className="h-11 scale-150 -mt-3" src={logo} alt="" />
      </div>

      {/* search  */}
      <div className="col-span-9 ">
        <div className="w-full flex justify-center">
          <input
            placeholder="Search"
            type="text"
            className="w-[40%] border border-gray-300 py-1 px-4 rounded-l-full relative"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-gray-100 border border-gray-300 rounded-r-full py-2 px-5">
            {search}
          </button>
          <button>
            <img className="h-8 ml-4" src={mic} alt="" />
          </button>
        </div>
        <div className="fixed ml-[16.6rem] w-[27.3%]">
          <ul className="rounded-lg shadow-xl border-gray-300 py-2">
            {searchSuggestion.map((s) => (
              <li
                key={s}
                className="bg-white px-3 py-[3px] flex align-middle items-center space-x-3 text-gray-700 hover:bg-[#f2f2f2] text-[16px]"
              >
                <span className="scale-[0.8]">{search}</span> <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* user profile  */}
      <div className="col-span-1 text-end mt-2 align-middle items-center space-x-7 mr-2">
        <button className="">{headvideo}</button>
        <button>{notification}</button>
        <button>{user}</button>
      </div>
    </div>
  );
};

export default Head;
