

import { createContext, useState} from "react";

export const lanContext = createContext()


export const LanContextProvider = ({children})=>{

    const [language,setlanguage] = useState("En")
    const languagehandler = ()=>{
       setlanguage(language==="En"?"hi":"En")
    }

    return (
        <lanContext.Provider value={{language,languagehandler}}>{children}</lanContext.Provider>
    )
}