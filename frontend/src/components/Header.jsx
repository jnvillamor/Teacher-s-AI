import React from "react";
import { useState } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const Sidebar = () => {
  const [active, setActive] = useState("Courses");

  const handleClick = (page) => {
    setActive(page);
  };

  return (
    <div className="flex items-center my-8">
      <ArrowBackIosNewRoundedIcon style={{ fontSize: 32, color: "white" }} />
      <span
        className="ml-4 text-4xl text-white"
        style={{ fontFamily: "Poppins" }}
      >
        Courses
      </span>
    </div>
  );
};

export default Sidebar;
