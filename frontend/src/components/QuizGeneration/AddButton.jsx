import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

const QuizGenerate = () => {
  const [active, setActive] = useState("Courses");

  const handleClick = (page) => {
    setActive(page);
  };

  return (
    <div className="flex justify-center col-span-3 px-14 mt-4">
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#82868C",
          width: "100%",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        <AddBoxRoundedIcon />
      </Button>
    </div>
  );
};

export default QuizGenerate;
