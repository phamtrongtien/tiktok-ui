import React, { createContext, useState } from 'react'
import Context from './context';

export const ThemeContext = createContext();
// 1: createContext
// 2: Provider
// 3: consumer

export default function UseContext() {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');

    }
    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <button onClick={toggleTheme}>
                    Toggle theme
                </button>
                <Context />
            </div>
        </ThemeContext.Provider>

    )
}
