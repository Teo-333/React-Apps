import React, { useEffect, useState } from 'react';
import { ReactComponent as Sun } from '../../../assets/images/Sun-icon.svg';
import { ReactComponent as Moon } from '../../../assets/images/Moon-icon.svg';
import './ThemeToggle.css';

const ThemeToggleButton: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        // Apply theme on mount and when isDarkMode changes
        const theme = isDarkMode ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [isDarkMode]);

    const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDarkMode(e.target.checked);
    };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={isDarkMode}
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                {isDarkMode ? <Moon /> : <Sun />}
            </label>
        </div>
    );
}

export default ThemeToggleButton;
