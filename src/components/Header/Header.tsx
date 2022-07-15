import React from 'react'
import { User } from "@/types/User"
import { Links } from '@/components/Link'
export interface HeaderProps {
  user: User
}

export const Header: React.FC<HeaderProps> = React.memo(({ user }) => {
  return (
    <div className="sticky top-0 z-40 w-full p-4 bg-white border-b-2 border-gray-200 shadow-lg">
      <nav className="flex justify-between items-center">
        <Links />
        {user.name}
      </nav>
    </div>
  )
})

Header.displayName = 'Header'
