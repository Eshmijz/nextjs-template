import React from 'react';
import type { ComponentStoryObj } from '@storybook/react'
import { HomeIcon } from '@heroicons/react/outline'
import { LinkItem } from './LinkItem'

type Story = ComponentStoryObj<typeof LinkItem>

export default {
  component: LinkItem,
}

export const Default: Story = {
  args: {
    href: "/",
    label: "Home",
  }
}

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <HomeIcon className="h-9 w-9 p-1" />,
  }
}
