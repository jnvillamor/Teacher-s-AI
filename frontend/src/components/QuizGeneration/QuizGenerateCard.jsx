import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const QuizGenerate = () => {
  const [active, setActive] = useState("Courses");

  const handleClick = (page) => {
    setActive(page);
  };

  return (
    <div className="justify-center col-span-3 px-14 mt-4">
      <Box
        sx={{
          width: "100%",
          height: "22.5rem",
          backgroundColor: "primary.dark",
          borderRadius: "1rem",
          backgroundColor: "white",
          padding: "2.625rem",
        }}
      >
        <Typography
          variant="h4"
          style={{ fontFamily: "Poppins", marginBottom: "1.5rem" }}
        >
          Question 1
        </Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{ width: "100%", margin: "0.75rem", borderRadius: ".5rem" }}
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{ width: "100%", margin: "0.75rem", borderRadius: ".5rem" }}
        />
      </Box>
    </div>
  );
};

export default QuizGenerate;
