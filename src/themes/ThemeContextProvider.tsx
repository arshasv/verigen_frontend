import { createContext, FC, PropsWithChildren, useContext } from "react";
import { useColorTheme } from "./use-color-theme"; 
import { ThemeProvider as MuiThemeProvider, Theme } from "@mui/material";

type ThemeContextType = {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  
  return (
    <MuiThemeProvider theme={value.theme}>
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};                                                 