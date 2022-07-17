import React from 'react'
import { Card } from './Card'
import { FlagIcon } from "@heroicons/react/solid"
import { HeartIcon } from '@heroicons/react/outline';
import { Post } from "@/types/Post"
import { useRouter } from 'next/router'

interface CardListProps {
  items: Post[]
}

export const CardList: React.FC<CardListProps> = ({ items }) => {
  const router = useRouter()
  const handleClick = (id: string) => {
    router.push(`/${id}`)
  }
  return (
    <div className="bg-gray-200 rounded-2xl w-[90%] columns-3xs gap-4 p-4">
      {items.map(item => (
        <Card key={item.id} onClick={() => handleClick(item.id)}>
          <div className="flex flex-col pr-10 p-4 relative w-full">
            <button className="absolute top-16 right-2 hidden group-hover:flex">
              <FlagIcon className="h-9 w-9 p-2 text-gray-400" />
            </button>
            <button className="absolute top-24 right-2 rounded-full hidden group-hover:flex">
              <HeartIcon className="h-9 w-9 p-2 text-red-400" />
            </button>
            <h3 className="text-2xl font-bold w-full h-10 overflow-hidden text-ellipsis whitespace-nowrap">
              {item.title}
            </h3>
            <p className="max-h-[70%] p-2">
              {item.body}
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}
