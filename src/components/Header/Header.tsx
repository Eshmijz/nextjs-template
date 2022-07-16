import React from 'react'
import { User } from "@/types/User"
import { Links } from '../Link'
import { BookOpenIcon, CubeIcon, DatabaseIcon } from '@heroicons/react/outline'
export interface HeaderProps {
  user?: User
}

const links = [
  {
    href: "/",
    label: 'Home',
    icon: <BookOpenIcon className="h-9 w-9 p-2" />
  },
  {
    href: "/cube",
    label: 'Cube',
    icon: <CubeIcon className="h-9 w-9 p-2" />
  },
  {
    href: "/database",
    label: 'DB',
    icon: <DatabaseIcon className="h-9 w-9 p-2" />
  },
]

export const Header: React.FC<HeaderProps> = React.memo(({ user = null }) => {
  return (
    <div className="sticky top-0 z-40 w-full p-4 bg-white border-b-2 border-gray-200 shadow-lg">
      <nav className="flex justify-between items-center">
        <Links links={links} />
        <p>
          {user ? user!.name : "SignIn"}
        </p>
      </nav>
    </div>
  )
})

Header.displayName = "Header"