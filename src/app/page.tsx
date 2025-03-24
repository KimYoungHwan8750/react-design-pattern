import { ChildrenExample } from "./render-pattern/children/children";
import { RenderPropsExample } from "./render-pattern/render-props/render-props";

export default function Home() {
  return (
    <div className="">
      <ChildrenExample/>
      <RenderPropsExample/>
    </div>
  );
}
