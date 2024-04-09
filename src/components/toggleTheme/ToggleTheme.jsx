"use client";
import React, { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";
import { AppContext } from "@/context/AppContext";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <IconButton onClick={toggleTheme} style={{ color: "white" }}>
      {theme === "dark" ? <DarkModeIcon  /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ToggleTheme;
