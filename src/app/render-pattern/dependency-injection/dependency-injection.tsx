"use client";
import { useCallback, useContext, useEffect } from "react"
import { DependencyInjectionContext } from "./dependency-injection-context"

type ButtonProps = {
  text: string
  onClick: () => void
};

const Button = (props: ButtonProps) => {
  const context = useContext(DependencyInjectionContext);
  const onClick = useCallback(() => {
    context && context.insertLog("Log inserted.");
    props.onClick();
  }, [context]);

  return (
    <button 
      onClick={ onClick }
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Button: {props.text}
    </button>
  )
}

export { Button };