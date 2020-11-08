import React, { useState, useLayoutEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { darkMode, lightMode} from './theme';

export const ThemeContext = React.createContext({
    dark: false,
    toggleSwitch: () => {},
});

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);

    useLayoutEffect(() => {
        setDark(dark);
    }, [dark]);

    const toggleSwitch = () => {
        setDark(!dark);
    };

    return (
        <ThemeContext.Provider value={{ dark, toggleSwitch }}>
            <PaperProvider theme={dark?darkMode:lightMode}>
                {children}
            </PaperProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
