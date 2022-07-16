import React from 'react'

interface CardProps {
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex min-w-[240px] max-w-[480px] min-h-[180px] max-h-[360px] rounded-2xl shadow-lg bg-white group text-ellipsis overflow-hidden break-all cursor-pointer
    transition duration-150 ease-in-out hover:scale-105">
      {children}
    </div>
  )
}
