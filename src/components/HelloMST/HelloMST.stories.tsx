import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import HelloMST, { HelloMSTProps } from '.';

export default {
  title: 'Example/HelloMST',
  component: HelloMST,
  argTypes: {
    children: { control: 'text', defaultValue: 'Great Digital Agency!' },
  },
  decorators: [withKnobs],
} as Meta;

const Template: Story<HelloMSTProps> = (args) => <HelloMST {...args} isText={boolean('Is text', false)} />;

export const Text = Template.bind({});
Text.args = {};

export const Red = Template.bind({});
Red.args = {
  color: 'red',
  children: 'Hello MST!',
};

export const Black = Template.bind({});
Black.args = {
  color: 'black',
  children: 'Hello MST!',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  children: 'Hello MST!',
};
