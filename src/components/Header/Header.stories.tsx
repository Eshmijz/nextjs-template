import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from './Header'

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  user: {
    name: 'Eshmijz',
    email: 'eshmijz@gmail.com',
    lastSignInDate: "today"
  }
}