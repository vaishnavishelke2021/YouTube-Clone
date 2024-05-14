import React from "react";
import Button from "./Button";

const list = [
  "All",
  "ReactJS",
  "Music",
  "Spirituality",
  "Podcast",
  "Cricket",
  "Psychology",
  "Books",
  "Development",
  "Marvel",
  "Artificial Intelligence",
  "Kdrama",
  "UI",
  "Figma",
];

const ButtonList = () => {
  return (
    <div className="flex space-x-[12px] font-medium text-[14px]">
      {list.map((btn) => (
        <Button key={btn} name={btn} />
      ))}

      {/* <button className="bg-white px-3 text-lg">></button> */}
    </div>
  );
};

export default ButtonList;
