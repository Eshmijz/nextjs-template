import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HomeIcon } from '@heroicons/react/outline'
import { LinkItem } from './LinkItem'

export default {
  title: 'Example/LinkItem',
  component: LinkItem,
} as ComponentMeta<typeof LinkItem>

const Template: ComponentStory<typeof LinkItem> = (args) => <LinkItem {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  href: "/",
  label: "Home"
}

export const LinkWithIcon = Template.bind({})
LinkWithIcon.args = {
  ...Basic.args,
  icon: <HomeIcon className="h-9 w-9 p-2" />
}