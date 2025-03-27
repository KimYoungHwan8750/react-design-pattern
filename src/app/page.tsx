"use client";
import { ChildrenExample } from "./render-pattern/children/children";
import { Button } from "./render-pattern/dependency-injection/dependency-injection";
import { DependencyInjectionProvider } from "./render-pattern/dependency-injection/dependency-injection-context";
import { RenderPropsExample } from "./render-pattern/render-props/render-props";

export default function Home() {
  return (
    <div className="flex flex-col">
      <ChildrenExample/>
      <RenderPropsExample/>
      <Button text="not in provider" onClick={() => console.log("Not in provider button clicked!")}/>
      <DependencyInjectionProvider>
        <Button text="in provider" onClick={() => console.log("In provider button clicked!")}/>
      </DependencyInjectionProvider>
    </div>
  );
}
