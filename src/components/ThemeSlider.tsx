import React from 'react';
import { Slider, Box } from '@mui/material';

type ThemeSliderProps = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
};

// слайдер для переключения темы темы
const ThemeSlider: React.FC<ThemeSliderProps> = ({ darkMode, setDarkMode }) => {
    const marks = [
        { value: 0, label: 'Light' },
        { value: 1, label: 'Dark' },
    ];

    const onSliderChange = (_: Event, value: number | number[]) => {
        setDarkMode(value === 1);
    };

    return (
        <Box
            style={{
            position: 'absolute',
            top: 10,
            right: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 10,
            }}
        >
            <span style={{ marginBottom: 8 }}>Theme</span>
            <Slider
            value={darkMode ? 1 : 0}
            step={1}
            marks={marks}
            min={0}
            max={1}
            onChange={onSliderChange}
            sx={{ width: 50 }}
            />
        </Box>
    );
};

export default ThemeSlider;