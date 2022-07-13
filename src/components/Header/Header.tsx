import React from 'react'
import { User } from "@/types/User"

type Props = {
  user: User
}
export const Header: React.FC<Props> = ({ user }) => {
  return (
    <div className="w-full h-12 flex justify-between items-center border-b border-black">
      Hello, {user?.name} !
    </div>
  )
}
