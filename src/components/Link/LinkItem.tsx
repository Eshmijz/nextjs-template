import React from 'react'
import Link from 'next/link'

interface Props {
  href: string
  label: string
  icon?: React.ReactNode
}

export const LinkItem: React.FC<Props> = ({ href, label, icon = null }) => {
  return (
    <div className="flex">
      <Link href={href}>
        <a className="flex justify-center items-center">{icon}{" "}{label}</a>
      </Link>
    </div>
  )
}
