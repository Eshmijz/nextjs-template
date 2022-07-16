import React from 'react'
import { LinkItem, LinkItemProps } from "./LinkItem"
interface LinksProps {
  links: LinkItemProps[]
}

export const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <div className="flex gap-2">
      {links?.map(link => (
        <LinkItem key={link.label} {...link} />
      ))}
    </div>
  )
}