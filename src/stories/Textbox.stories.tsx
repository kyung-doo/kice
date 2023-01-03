import { ComponentStory, ComponentMeta } from '@storybook/react';
import Textbox from '../components/Textbox';


export default {
  title: 'components/Textbox',
  component: Textbox,
  argTypes: {
    
  },
} as ComponentMeta<typeof Textbox>;

const Template: ComponentStory<typeof Textbox> = (args) => <Textbox {...args} />;

export const Default = Template.bind({});


export const Password = Template.bind({});
Password.args = {
  type: 'password',
  maxLength: 8,
}

export const Fullsize = Template.bind({});
Fullsize.args = {
  f: true
}

export const Width500 = Template.bind({});
Width500.args = {
  w: '500px'
}

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
}

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true
}

