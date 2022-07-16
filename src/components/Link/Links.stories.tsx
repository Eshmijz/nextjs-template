import React from 'react';
import type { ComponentStoryObj } from '@storybook/react'
import { Links } from "./Links"
import { HomeIcon, UserIcon } from '@heroicons/react/outline'

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

type Story = ComponentStoryObj<typeof Links>

export default {
  component: Links
}


export const Default: Story = {
  args: {
    links: links
  }
}

