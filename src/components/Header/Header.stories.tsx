import React from 'react';
import type { ComponentStoryObj } from '@storybook/react'
import { Header } from './Header'

type Story = ComponentStoryObj<typeof Header>
export default {
  component: Header,
}

export const Default: Story = {
  args: {
    user: {
      name: 'Eshmijz',
      email: 'eshmijz@gmail.com',
      lastSignInDate: "today"
    }
  }
}
