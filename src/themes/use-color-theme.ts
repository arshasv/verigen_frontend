import { createTheme, PaletteMode } from "@mui/material";
import { useState, useEffect } from "react";

// Primary color
const primaryColor = '#0099FF'; // Blue Cyan

// Define the colors for the theme
const secondaryColor = '#FF4081'; // A vibrant pink for contrast
const lightBackground = '#F0F4FF'; // A very light blue for a softer background
const darkBackground = '#121212'; // A very dark grey for dark mode
const lightSurface = '#FFFFFF'; // White for surfaces in light mode
const darkSurface = '#1E1E1E'; // A dark grey for surfaces in dark mode
const lightText = '#333333'; // Dark grey for text in light mode
const darkText = '#E0E0E0'; // Light grey for text in dark mode

// Define colors for light and dark themes separately
const colors = {
  light: {
    palette: {
      mode: 'light',
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      background: {
        default: lightBackground,
        paper: lightSurface,
      },
      text: {
        primary: lightText,
        secondary: darkText,
      },
    },
  },
  dark: {
    palette: {
      mode: 'dark',
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      background: {
        default: darkBackground,
        paper: darkSurface,
      },
      text: {
        primary: darkText,
        secondary: lightText,
      },
    },
  },
};

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as PaletteMode;
    if (savedTheme) {
      setMode(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleColorMode = () => setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));


  const theme = createTheme(colors[mode]);

  return { theme, toggleColorMode };
};

export default colors;