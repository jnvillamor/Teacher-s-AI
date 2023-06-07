import React from "react";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import Button from "@mui/material/Button";

const buttonStyle = {
  backgroundColor: "black",
  justifyContent: "flex-start",
  textTransform: "none",
  fontFamily: "Poppins",
  fontSize: "1.25rem",
  borderRadius: "0.5rem",
};

const Sidebar = () => {
  const [active, setActive] = useState("Courses");

  const handleClick = (page) => {
    setActive(page);
  };

  return (
    <div className="bg-black col-span-1 p-6 rounded-r-lg flex flex-col flex">
      <div className="flex justify-center">
        <img src={Logo} alt="Logo" className="h-12 m-8 top-8 sm:top-16m" />
      </div>
      <div className="flex flex-col mt-[32px] sm:top-54m px-8">
        <Button
          variant="contained"
          startIcon={<HomeRoundedIcon />}
          style={Object.assign({}, buttonStyle, {
            backgroundColor: active === "Home" ? "gray" : "black",
          })}
          className="w-full"
          onClick={(e) => handleClick("Home")}
        >
          Home
        </Button>

        <Button
          variant="contained"
          startIcon={<AppsRoundedIcon />}
          style={Object.assign({}, buttonStyle, {
            backgroundColor: active === "Courses" ? "gray" : "black",
          })}
          className="w-full"
          onClick={(e) => handleClick("Courses")}
        >
          Courses
        </Button>

        <Button
          variant="contained"
          startIcon={<ExitToAppRoundedIcon />}
          style={Object.assign({}, buttonStyle)}
          className="w-full"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
