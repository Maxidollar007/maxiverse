import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { utilitiesType } from "../types";

const themeContext=createContext<utilitiesType | undefined> (undefined);


interface ThemeProviderProps{
    children :ReactNode
}

export function ThemeContextProvider ({children}:ThemeProviderProps){

    const [theme,setTheme]=useState<String | null>(null)
    const [showMenu,setShowMenu]=useState<boolean>(false)

    const toogleTheme=()=>{
        localStorage.setItem("theme",theme=='light' ? 'dark' : "light" )
        setTheme(theme=='light' ? 'dark' : "light")
    }
    const toogleShowSideMenu=()=>{
        setShowMenu(!showMenu)
    }

    const utilities : utilitiesType ={
        toogleTheme,
        toogleShowSideMenu,
        theme,
        showMenu
    }

    useEffect(()=>{
        if(localStorage.getItem('theme')==null){
            JSON.stringify(localStorage.setItem('theme',"dark"))
            setTheme("dark")
        }else{
            setTheme(localStorage.getItem("theme"))
        }
    },[])

    return <themeContext.Provider value={utilities}>
        {children}
    </themeContext.Provider>
}


export function useTheme(){
    const context=useContext(themeContext)
    if(!context){
        throw new Error("Erreur de contexte pour le thème");
    }
    return context
}
