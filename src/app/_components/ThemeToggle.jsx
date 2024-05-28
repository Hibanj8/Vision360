import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="toggle-container" onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
            {darkMode ? (
                <img src="/mode/sun.png" alt="Sun Icon" className="w-7 h-7"/>
            ) : (
                <img src="/mode/moon.png" alt="Moon Icon" className="w-7 h-7"/>
            )}
        </div>
    );
};

export default ThemeToggle;
