"use client";
import { createContext, ReactNode } from "react";

type DependencyInjectionContextType = {
  insertLog: (message: string) => void;
} | null;

const DependencyInjectionContext = createContext<DependencyInjectionContextType>(null);

const DependencyInjectionProvider = ({children}: {children: ReactNode}) => {
  const insertLog = (message: string) => {
    console.log(message);
  }

  return (
    <DependencyInjectionContext.Provider value={{insertLog}}>
      {children}
    </DependencyInjectionContext.Provider>
  )
}

export { DependencyInjectionProvider, DependencyInjectionContext };