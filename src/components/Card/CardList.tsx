import React from 'react'
import { Card } from './Card'
import { FlagIcon } from "@heroicons/react/solid"
import { HeartIcon } from '@heroicons/react/outline';

interface CardListProps {
  items: {
    id: string;
    title: string;
    body: string;
  }[]
}

export const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <div className="bg-gray-200 w-[90%] mx-auto flex flex-wrap justify-start items-start p-4 gap-4 rounded-2xl">
      {items.map(item => (
        <Card key={item.id}>
          <div className="flex flex-col pr-10 p-4 relative w-full">
            <button className="absolute top-2 right-2 hidden group-hover:flex">
              <FlagIcon className="h-9 w-9 p-2 text-gray-400" />
            </button>
            <button className="absolute top-10 right-2 rounded-full hidden group-hover:flex">
              <HeartIcon className="h-9 w-9 p-2 text-red-400" />
            </button>
            <h3 className="text-2xl font-bold w-full h-10 overflow-hidden text-ellipsis whitespace-nowrap">
              {item.title}
            </h3>
            <p className="max-h-[70%] p-4">
              {item.body}
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}
