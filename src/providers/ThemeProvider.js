"use client";
import { AppContext } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react"; 

export const ThemeProvider = ({ children }) => {
  const { theme } = useContext(AppContext);

  useEffect(() => {
	document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <>{children}</>;
};
