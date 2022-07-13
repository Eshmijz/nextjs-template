import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Label = Template.bind({});
Label.args = {
  label: 'Button',
  handleClick: action("clicked")
};

export const Count = Template.bind({});
Count.args = {
  label: 'add',
  handleClick: action("clicked")
};