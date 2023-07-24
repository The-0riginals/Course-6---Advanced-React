import React, { useContext, useState } from "react";


const ThemeContext = React.createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // default theme is light
    return (
    <ThemeContext.Provider
     value={{ 
        theme, // is just the light-dark theme string value
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light") // is a function that receives no parameters and just toggles the theme from light to dark and vice versa.
        }}
        >
            { children }
    </ThemeContext.Provider>
    );
}
export const useTheme = () => useContext(ThemeContext);


