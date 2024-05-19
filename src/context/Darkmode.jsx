/* eslint-disable react-hooks/rules-of-hooks */
 
import {  createContext, useState } from "react";

const  darkModeContext = createContext();


const  darkModeContextProvider=({children})=>{
 const    [isdarkMode,setIsdarkMode] =useState(false)

  return (

    <darkModeContext.Provider  value ={{isdarkMode,setIsdarkMode}}>

 {children}
    </darkModeContext.Provider>
  )

    
} 

export const  DarkMode = darkModeContext;

export default darkModeContextProvider;