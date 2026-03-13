import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { Background } from '@react-navigation/elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ColorScheme{
    bgPrimary: string;
    bgSecondary: string;
    success: string;
    danger: string;
    warning: string;
    text: string;
    gradients: {
        background: [string, string];}
    statusTheme: "light" | "dark";
}

const lightColors: ColorScheme={
    bgPrimary: "#fff",
    bgSecondary: "#cfcece",
    success: "#88e12f",
    danger: "#e73232",
    warning:" #ecc44a",
    text: "#262626",
    gradients: {
        background: ["#e7e7e7", "#b2b2b2"],
    },
    statusTheme: "light" as const,

}

const darkColors: ColorScheme={
    bgPrimary: "#000000",
    bgSecondary: "#3a3a3a",
    success: "#88e12f",
    danger: "#e73232",
    warning:" #ecc44a",
    text: "#ffffff",
    gradients: {
        background: ["#e7e7e7", "6b6b6b"],
    },
    statusTheme: "dark" as const,
}

// null check - verificar o tipo do contexto
interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    colors: ColorScheme;
}

const ThemeContext = createContext<undefined | ThemeContextType>(undefined)

// themeProvider
export const ThemeProvider = ({children} : {children: ReactNode})  => {
    // salva as variaveis
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // coleta o que o usuário vai escolher e salvar na memória
        AsyncStorage.getItem("darkMode").then((value: string | null) => {
            if(value) setIsDarkMode(JSON.parse(value));
        });
    }, []);
    // troca o tema
    const toggleDarkMode = async () => {
        const newMode = !isDarkMode;
        setIsDarkMode (newMode)
        await AsyncStorage.setItem("darkMode", JSON.stringify(newMode))
    };
const colors = isDarkMode? darkColors : lightColors;

return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode, colors}} >
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error("USETHEME NÃO FUNCIONA!")
    }

    return context
}

export default useTheme