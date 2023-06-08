import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

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
          backgroundColor: "#FD6531",
          "&:hover": {
            backgroundColor: "#9C2800",
          },
        }}
      >
        Generate
      </Button>
    </div>
  );
};

export default QuizGenerate;
