"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
    accentColor: string;
    accentBg: string;
    accentHover: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Optional: Persist theme preference
    useEffect(() => {
        // Check system preference or localStorage if needed
        // For now, default to true as per original code
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    const accentColor = isDarkMode ? "text-white" : "text-[#ff9800]";
    const accentBg = isDarkMode ? "bg-white text-black" : "bg-[#ff9800] text-white";
    const accentHover = isDarkMode ? "hover:bg-white/10" : "hover:bg-orange-500/10";

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, accentColor, accentBg, accentHover }}>
            <div className={isDarkMode ? "dark" : ""}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
