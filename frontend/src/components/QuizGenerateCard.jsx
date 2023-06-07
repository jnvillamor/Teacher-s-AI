import React from "react";
import { useState } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const Sidebar = () => {
  const [active, setActive] = useState("Courses");

  const handleClick = (page) => {
    setActive(page);
  };

  return (
    <div className="col-span-4 p-6 rounded-r-lg flex flex-col flex">
      <div className="flex flex-col mt-[32px] sm:top-54m px-8 items-center">
        <div className="flex items-left">
          <ArrowBackIosNewRoundedIcon />
          <span className="ml-2">Home Page</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
