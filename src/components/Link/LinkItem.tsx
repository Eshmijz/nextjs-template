import React from 'react'
import Link from 'next/link'

export interface LinkItemProps {
  href: string
  label: string
  icon?: React.ReactNode
}

export const LinkItem: React.FC<LinkItemProps> = ({ href, label, icon = null }) => {
  return (
    <div className="flex">
      <Link href={href}>
        <a className="flex justify-center items-center">{icon}{" "}{label}</a>
      </Link>
    </div>
  )
}
