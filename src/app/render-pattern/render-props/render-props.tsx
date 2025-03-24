import { ReactNode } from "react";

/**
 * render props를 사용하여 임의의 매개변수를 넘겨줄 수 있는지 테스트
 */
const RenderPropsTest = ({render}: {render: (text: string) => ReactNode}) => {
  return (
    <div>{render("Render Props Hello World")}</div>
  )
}

const Child = ({text}: {text: string}) => {
  return (
    <div>{text}</div>
  )
}

/**
 * render props를 사용하여 부모 요소로부터 text를 전달받아 렌더링 가능하다
 */
const RenderPropsExample = () => {
  return (
    <RenderPropsTest render={(text) => <Child text={text}></Child>}></RenderPropsTest>
  )
}

export default RenderPropsTest;
export { Child, RenderPropsExample };