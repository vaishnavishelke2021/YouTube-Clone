import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-5 pl-[5rem]">
      <iframe
        className="rounded-lg"
        width="870"
        height="470"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="mt-2">
        <h1 className="text-[1.2rem] w-[880px] font-bold">Charlie Puth - We Don't Talk Anymore (Lyrics) | Ed Sheeran, One Direction,... (MIX LYRICS)</h1>
        <div  className="flex space-x-4 py-2 align-middle items-center mt-1">
          <img className="w-10 h-10 rounded-full" src="https://rukminim2.flixcart.com/image/850/1000/l0tweq80/poster/p/e/b/small-youtube-logo-multicolour-photo-paper-print-poster-original-imagcj8d3zphfwgz.jpeg?q=90&crop=false" alt="" />
          <div>
            <h3 className="font-bold text-gray-800">AlphaSubs</h3>
            <p className="text-[11px] font-semibold text-gray-500">187K subscribers</p>
          </div>
          <button className="bg-[#161616] h-[33px] text-white px-5 rounded-full font-semibold text-[14px]">Subscribe</button>
        </div>
      </div>

      <CommentsContainer></CommentsContainer>
    </div>
  );
};

export default WatchPage;
