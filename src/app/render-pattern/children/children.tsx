import React, { ReactNode } from "react"


/**
 * children을 렌더링할 때 임의로 매개변수를 넘겨 줄 수 있는지 테스트
 */
const ChildrenTest = ({children}: {children: (s: string) => ReactNode}) => {
  return (
    <div>{children("Children Hello World")}</div>
  )
}

const Child = ({text}: {text: string}) => {
  return(
    <div>{text}</div>
  )
}

/**
 * children에서 부모 요소로부터 text를 전달받아 렌더링 가능하다
 */
const ChildrenExample = () => {
  return (
    <ChildrenTest>
      { text => <Child text={text} />}
    </ChildrenTest>
  )
}

export default ChildrenTest;
export { Child, ChildrenExample };