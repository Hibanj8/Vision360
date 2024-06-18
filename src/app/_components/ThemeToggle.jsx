import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const theme = localStorage.getItem("theme");
            return theme === "dark";
        }
        return false; // Valeur par défaut si localStorage n'est pas disponible
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem("theme", "light");
            }
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
