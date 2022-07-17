import React from 'react'
import { Header, HeaderProps } from "./Header"
import { useScroll } from "@/hooks/useScroll"


export const ScrollHeader: React.FC<HeaderProps> = (props) => {
  const isVisible = useScroll()

  return (
    <div className={`${"sticky top-0 z-40"} ${"transition delay-150"} ${isVisible ? "ease-in translate-y-0" : "ease-out -translate-y-20"}`
    }>
      <Header {...props} />
    </div>
  )
}
