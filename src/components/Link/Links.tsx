import React from 'react'
import { HomeIcon, UserIcon } from '@heroicons/react/outline'
import { LinkItem } from "./LinkItem"


export const Links = () => {
  return (
    <div className="flex gap-2">
      {links.map(link => (
        <LinkItem key={link.label} {...link} />
      ))}
    </div>
  )
}

const links = [
  {
    href: "/",
    label: 'Home',
    icon: <HomeIcon className="h-9 w-9 p-2" />
  },
  {
    href: "/about",
    label: 'About',
    icon: <UserIcon className="h-9 w-9 p-2" />
  },
]